import Joi from 'joi'

const email = Joi.string().email().max(20);
const password = Joi.string().regex(/^[a-zA-Z0-9]{8,20}$/);
const file = Joi.object();
const name = Joi.string();
const tel  = Joi.string().regex(/^(\(\d{2}\) )\d{3}-\d{2}-\d{2}$/);


exports.registrationUser = Joi.object().keys({
  email: email.required(),
  password : password.required()
});

exports.loginUser = Joi.object().keys({
  email: email.required(),
  password: password.required()
});

exports.editUser = Joi.object().keys({
  file,
  firstName: name,
  lastName: name,
  tel,
  password: password
});