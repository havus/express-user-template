const User = require('../models/user');
const { comparePassword } = require('../helper/bcryptjs');
const { jwtHash } = require('../helper/jwt');

class UserController {
  static signUp (req, res, next) {
    const {
      fullname,
      username,
      email,
      password,
    } = req.body;

    const payload = {
      fullname,
      username,
      email,
      password,
    };

    User.create(payload)
      .then((data) => {
        const token = {
          _id: data._id,
          fullname,
          username,
          email,
          profile_pic: process.env.PIC_PROFILE_DEFAULT,
        }
        res.status(201).json({ token: jwtHash(token) });
      })
      .catch(next);
  }

  static signIn (req, res, next) {
    const {
      email,
      password,
    } = req.body;
    if (!email || !password) {
      next({
        message: 'Username / password cannot be empty',
      })
    } else {
      User.findOne({ email })
        .then((result) => {
          if (result) {
            if (comparePassword(password, result.password)) {
              const {_id, fullname, username } = result;
              const payload = {
                _id,
                fullname,
                username,
                email,
              };
              res.status(200).json({ token: jwtHash(payload) });
            } else {
              next({
                message: 'Wrong username / password',
              });
            }
          } else {
            next({
              message: 'Wrong username / password',
            });
          }
        })
        .catch(next);
    }
  }

  static decode(req, res, next) {
    res.status(200).send(req.payload._id);
  }
}

module.exports = UserController;