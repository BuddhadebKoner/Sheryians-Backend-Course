const express = require('express')
const app = express()

// middleware
app.use(function (req, res, next) {
   const date = new Date()
   console.log("Time:", date)
   next();
})

app.get("/", function (req, res) {
   res.json({ message: "Hello World" })
})

// routing
app.get("/profile", function (req, res) {
   res.json({ message: "Profile Page" })
})

app.get("/error-handle", function (req, res, next) {
   return next(new Error("Not work this route")); // this line is for error purpus [testing]
})

// error handeller for this route error-handle
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.json({
      status: 500,
      message: "this route is not work"
   })
})

app.listen(3000);

console.log("Server is running on port http://localhost:3000");