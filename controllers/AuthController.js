const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res, next) => {
    const username = req.body.UserName;
    const password = req.body.password;
  
    const user = await User.findOne({ UserName: username });
  
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(user.UserName, process.env.AUTH_TOKEN_SECRET);
        res.json({
          message: 'Login successful',
          token,
        });
      } else {
        res.status(400).json('Invalid credentials');
      }
    } else {
      res.status(400).json('User not found');
    }
  };
  module.exports = {
    Login
}