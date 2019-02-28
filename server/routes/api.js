import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';

import confPass from '../config/passport';
import { User } from '../models';

const router = express.Router();
confPass(passport);

dotenv.config();

router.post('/registration', (req, res) => {
  User.find({
    where: {
      email: req.body.email,
    },
  })
    .then(user => {
      if (user || !req.body.email) {
        return res.status(203).send({
          message: 'Пользователь уже существует',
        });
      } else {
        User.create({
          email: req.body.email,
          password: req.body.password,
        }).then(({ username }) =>
          res.status(201).send({ username, message: 'Пользователь создан' }),
        );
      }
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

router.post('/login', (req, res) => {
  User.find({
    where: {
      email: req.body.email,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          message: 'Authentication failed. User not found.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const token = jwt.sign(
            JSON.parse(JSON.stringify({ id: user.id })),
            process.env.TOKEN_SECRET,
            { expiresIn: 86400 * 30 },
          );
          let userObj = null;
          jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
            if (!err) {
              User.findById(data.id)
                .then(user => ({
                  email: user.email,
                }))
                .then(user => {
                  res.json({ success: true, token: 'JWT ' + token, user });
                });
            }
          });
        } else {
          res
            .status(401)
            .send({
              success: false,
              msg: 'Authentication failed. Wrong password.',
            });
        }
      });
    })
    .catch(error => res.status(400).send(error));
});

router.get(
  '/relogin',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const token = getToken(req.headers);
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if (!err) {
          User.findById(data.id)
            .then(user => ({
              email: user.email,
            }))
            .then(user => {
              res.json(user);
            });
        }
      });
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
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

module.exports = router;
