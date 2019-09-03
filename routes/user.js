const router = require('express').Router();
const userController = require('../controllers/user');
const authentication = require('../middleware/authentication');

router.get('/', authentication, userController.decode); // only for development, delete this line for production :)
router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

module.exports = router;