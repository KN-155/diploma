import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();

import { User } from '../models';

module.exports = passport => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: process.env.TOKEN_SECRET,
  };
  passport.use(
    'jwt',
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findByPk(jwt_payload.id)
        .then(user => {
          return done(null, user);
        })
        .catch(error => {
          return done(error, false);
        });
    }),
  );
};
