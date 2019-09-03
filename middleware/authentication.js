const {jwtVerify} = require('../helper/jwt');

module.exports = (req, res, next) => {
  try {
    req.payload = jwtVerify(req.headers.token);
    console.log('<< authentic >>');
    next();
  }
  catch(err) {
    next({
      code: 401,
      message: err.message
    });
  }
}