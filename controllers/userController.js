// Models 
const User = require('../models/userModel');
//Error Handler
const asyncHandler = require('express-async-handler');



//functions
const createUser = async (req,res) => {
  const email = req.body.email;
  const findUser = await User.findOne({email: email});
  if (!findUser) {
    // Create a new user
    const newUser = await User.create(req.body);
    res.json(newUser);
    
  } else {
    res.json({
      msg: "User is Already Exists",
      success: false
    });
    
  }
};

const loginUser = async (req, res) => {
  const {email, password} = req.body;
  console.log(email, password);
}


// exports modules
module.exports = { createUser,
                   loginUser
                 };