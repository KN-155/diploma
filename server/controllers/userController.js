import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';
import Joi from 'joi'

import confPass from '../config/passport';
import { User } from '../models';
import {userScheme} from '../validate'

confPass(passport);
dotenv.config();

exports.registrationUser = async (req, res) => {
  const {error} = Joi.validate(req.body, userScheme.registrationUser);
  if (error) {
    return res.send({
      success: false,
      message: 'Введены некорректные данные',
    });
  }
  const user = await findUser('email', req.body.email);
  if (user) {
    return res.send({
      success: false,
      message: 'Пользователь уже существует',
    });
  }
  User.create({
    email: req.body.email,
    password: req.body.password,
  });
  return res.send({
    success: true,
    message: 'Пользователь создан'
  });
};

exports.loginUser = async (req, res) => {
  const {error} = Joi.validate(req.body, userScheme.loginUser);
  if (error) {
    return res.send({
      success: false,
      message: 'Введены некорректные данные',
    });
  }
  const user = await findUser('email', req.body.email);
  if(!user) {
    return res.send({
      success: false,
      message: 'Пользователь не зарегистрирован',
    });
  }
  user.comparePassword(req.body.password,  (err, isMatch) => {
    if (isMatch && !err) {
      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: 86400 * 30 });
      return res.json({
        success: true,
        token: 'JWT ' + token,
        message: 'Вход выполнен',
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          tel: user.tel,
          avatar: user.avatar
        },
      });
    } else {
      return res.send({
        success: false,
        message: 'Неверный пароль',
      });
    }
  });
};

exports.reloginUser = async (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    const {id} = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(id);
    if (user) {
      return res.send({
        success: true,
        message: 'Добро пожаловать',
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          tel: user.tel,
          avatar: user.avatar
        },
      });
    }
  }
};

exports.editUser = async (req, res) => {
  const token = getToken(req.headers);
  const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
  const user = await User.findById(id);
  user.comparePassword(req.body.confirmPassword,  (err, isMatch) => {
    if (isMatch && !err) {
      const obj = req.body;
      delete obj.confirmPassword;
      for (let key in obj) {
        if(!obj[key])
          delete obj[key];
      }
      const {error} = Joi.validate(obj, userScheme.editUser);
      if (error) {
        return res.send({
          success: false,
          message: 'Введены некорректные данные',
        });
      }
      user.update(obj);
      return res.send({
        success: true,
        message: 'Сохранено',
        user: obj
      });
    } else {
      return res.send({
        success: false,
        message: 'Введен неверный пароль',
      });
    }
  });
};

const findUser = (key, value) => (
  User.find({
    where: {
      [key]: value,
    },
  })
);

const getToken = headers => {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
