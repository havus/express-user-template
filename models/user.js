const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { hashPassword } = require('../helper/bcryptjs');

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'Fullname required!'],
    min: [10, 'Minimal name length is 6 character!'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username required!'],
    min: [10, 'Minimal username length is 10 character!'],
    validate: [(val) => {
      if (val.includes(' ') || val.includes('@') || val.includes('.')) {
        return false;
      }
      return true;
    }, `Username must not contain '@', ' ', '.'`]
  },
  email: {
    type: String,
    required: [true, 'Email required!'],
    validate: [function(val) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
    }, 'Email not valid'],
  },
  password: {
    type: String,
    minlength: [8, `Password must have min length 8`],
    required: [true, `Password required!`],
  },
  profile_pic: {
    type: String,
    default : 'https://res.cloudinary.com/dxkkt5pzu/image/upload/v1566793505/my_dafault/no-profile-picture.png',
  },
}, {
  timestamps: true,
  versionKey: false,
});

UserSchema.pre('save', function() {
  this.password = hashPassword(this.password);
});

const User = mongoose.model('User', UserSchema);

UserSchema.path('username').validate((v) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: v })
      .then((user) => {
        if(user && this._id !== user._id) {
          reject(new Error("Username has already been taken!"));
        }
        resolve();
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
});

UserSchema.path('email').validate((v) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: v })
      .then((user) => {
        if(user && this._id !== user._id) {
          reject(new Error("Email has already been taken!"));
        }
        resolve();
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
});

module.exports = User;
