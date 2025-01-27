const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../controllers/user.controllers');


router.get('/', (req, res) => {
   res.send('User Router');
});

// user register
router.post('/register', userRegister);
// user login
router.post('/login', userLogin);


module.exports = router;