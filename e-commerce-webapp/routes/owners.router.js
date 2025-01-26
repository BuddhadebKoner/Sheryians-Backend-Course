const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner.model');


router.get('/', (req, res) => {
   res.send('owner Router');
});

if (process.env.NODE_ENV === 'development') {
   router.post("/create", async function (req, res) {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
         return res.status(400).send("Owner already exists");
      }

      let { fullname, email, password } = req.body;

      const createdowner = await ownerModel.create({
         fullname,
         email,
         password
      })

      res.status(201).send(createdowner);
   });
}


module.exports = router;