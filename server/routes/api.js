import passport from 'passport';
import express from 'express';

import {userController} from '../controllers'

const router = express.Router();
const auth = passport.authenticate('jwt', { session: false });

router.post('/registration', userController.registrationUser);
router.post('/login', userController.loginUser);
router.put('/edit-profile', userController.editUser);
router.get('/relogin', auth, userController.reloginUser);

module.exports = router;
