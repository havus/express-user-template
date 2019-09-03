require('dotenv').config({ path: __dirname+'/../.env' });
const jwt = require('jsonwebtoken');

function jwtHash(obj) {
  return jwt.sign(obj, process.env.JWT_TOKEN_SALT);
}
function jwtVerify(str) {
  return jwt.verify(str, process.env.JWT_TOKEN_SALT);
}

module.exports = { jwtHash, jwtVerify };