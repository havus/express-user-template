const bcrypt = require('bcryptjs');

function hashPassword(str) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str, salt);
}

function comparePassword(str, hash) {
  return bcrypt.compareSync(str, hash);
}

module.exports = { hashPassword, comparePassword}