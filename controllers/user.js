const User = require('../models/user');
const { comparePassword } = require('../helper/bcryptjs');
const { jwtHash, jwtVerify } = require('../helper/jwt');

class UserController {
  static signUp (req, res, next) {
    let {fullname, username, email, password} = req.body;

    let obj = {
      fullname, username, email, password
    }

    User.create(obj)
    .then((data) => {
      let token = {
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
    let {email, password} = req.body;
    if (!email || !password) {
      next({
        message: 'Wrong username / password',
      })
    } else {
      User.findOne({ email })
      .then(one => {
        if (one) {
          if (comparePassword(password, one.password)) {
            const {_id, fullname, username, email } = one;
            let obj = {_id, fullname, username, email };
            console.log('berhasil login');
            res.status(200).json({ token: jwtHash(obj) });
          } else {
            next({
              message: 'Wrong username / password'
            })
          }
        } else {
          next({
            message: 'Wrong username / password'
          })
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