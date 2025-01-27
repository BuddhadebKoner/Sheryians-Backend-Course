const userModel = require("../models/user.model");
const bycript = require('bcrypt');
const generateTokens = require('../utils/tokens');

const userRegister = async (req, res) => {
   try {
      const { fullname, email, password } = req.body;

      // if user already exists
      let user = await userModel.findOne({ email: email });
      if (user) {
         return res.status(402).send('User already exists, login');
      }

      // hash password
      bycript.genSalt(10, function (err, salt) {
         bycript.hash(password, salt, async function (err, hash) {
            if (err) return res.status(503).send('encription error', err.message);
            else {
               let newUser = await userModel.create({
                  fullname,
                  email,
                  password: hash
               })
               if (!newUser) {
                  return res.status(400).send('Register failed');
               }
               let token = generateTokens(newUser);
               res.cookie('token', token);
               res.status(200).send({ message: 'user created sucessfully', newUser });
            }
         });
      });

   } catch (error) {
      res.status(500).send(error);
   }
};

const userLogin = async (req, res) => {
   try {
      const { email, password } = req.body;

      // Find the user by email
      const userWouldLogedin = await userModel.findOne({ email: email });
      if (!userWouldLogedin) {
         return res.status(404).send('Email not found. Register newly or try again.');
      }

      // Compare the password
      bycript.compare(password, userWouldLogedin.password, function (err, result) {
         if (err) {
            return res.status(500).send('Error comparing passwords');
         }
         if (result) {
            let token = generateTokens(userWouldLogedin);
            res.cookie('token', token);
            return res.status(200).send({ message: 'Login successful', user: userWouldLogedin });
         } else {
            return res.status(401).send('Incorrect password');
         }
      });
   } catch (error) {
      res.status(500).send(error.message);
   }
};



exports.userRegister = userRegister;
exports.userLogin = userLogin;