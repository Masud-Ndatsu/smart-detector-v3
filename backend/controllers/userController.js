const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2d" });
};

//Registering new user

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill out all required Fields");
  }
  if (password.length < 6) {
    res.status(404);
    throw new Error("Password must be up to 6 characters");
  }

  //Check if email already exist
  const userExists = await User.findOne({ email });

  //action to take if a user already exist
  if (userExists) {
    res.status(400);
    throw new Error("Email have already have already been used!!");
  }

  //create new user if it does not exists
  const user = await User.create({
    name,
    email,
    password,
  });

  //generating token after creating user
  const token = generateToken(user._id);

  //send HTTP-only token cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true,
  });

  //get back the user information if already registered
  if (user) {
    const { _id, name, email, password, phone, photo, bio } = user;
    res.status(201).json({
      name,
      email,
      phone,
      photo,
      bio,
    });
  } else {
    res.status(404);
    throw new Error("invalid user data");
  }
});

//**************************
//**************************
//**************************

//Login previous user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill out all required Fields");
  }

  //Check if email already exist
  const user = await User.findOne({ email });

  //Check if user does not exist
  if (!user) {
    res.status(400);
    throw new Error("user not found please create an account");
  }

  //User exist, now checking if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //generating token after creating user
  const token = generateToken(user._id);

  //send HTTP-only token cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true,
  });

  //show user information if password is correct
  if (User && passwordIsCorrect) {
    const { _id, name, email, password, phone, photo, bio } = user;

    res.status(200).json({
      name,
      phone,
      email,
      photo,
      bio,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or Password");
  }
});

//**********************
//**********************
//********************************** */

//LOGOUT

const logoutUser = asyncHandler(async (req, res) => {
  //send HTTP-only token cookie
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({
    message: "you have been log out",
  });
});

//******************************
//*******************************
//******************************/

//getting the user data

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, password, phone, photo, bio } = user;
    res.status(200).json({
      _id,
      name,
      email,
      password,
      phone,
      photo,
      bio,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//**************************
//**************************

//Get login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }

  //Verify token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    res.json(true);
  }
  return res.send("<h1>Sorry you are not login");
});

//**************************
//**************************
//Update user
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;

    user.email = email;
    user.name = req.body.name || name;
    user.phone = req.body.phone || phone;
    user.bio = req.body.bio || bio;
    user.photo = req.body.photo || photo;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      photo: updatedUser.photo,
      phone: updatedUser.phone,
      bio: updatedUser.bio,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//
//Changing Password and saving updated password
//
//

const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const { oldPassword, password } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found please signup");
  }

  //Validation
  if (!oldPassword || !password) {
    res.status(400);
    throw new Error("please add old and new password");
  }

  //check if old password matches password in the DB.
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  //if password matches save the new password added
  if (user && passwordIsCorrect) {
    user.password = password;
    await user.save();
    res.status(200).send("Password change successfully");
  } else {
    res.status(400);
    throw new Error("Password is incorrect");
  }
});

//**************************
//**************************
//forgot password
//**************************
//**************************
const forgotpassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  //delete token if it exist in the database
  let token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }

  //Create reset token
  let resetToken = crypto.randomBytes(32).toString("hex") + user._id;

  //Hash token before saving
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    console.log(" this is your token please hold it " + hashedToken);

  //saving token to db
  await new Token({
    userId: user._id,
    token: hashedToken,
    createdAt: Date.now(),
    expiredAt: Date.now() + 30 * (60 * 1000), //Thirty Minutes
  }).save();

  //construct a reset Url
  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  //constructing the email to be sent to the user
  const message = `
  <h2>Hello ${user.name}</h2>
  <p> Please use the URL below to reset the password</p>  
  <p>The reset link is valid for only 30Minutes.

  <a href="${resetUrl} clicktracking=off">${resetUrl}</a> 

  <p>Regards....</p>
  <p>Smart Detector Team</p>
  `;
  const subject = "Password Reset Request";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;

  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "rest email sent" });
  } catch (error) {
    throw new Error("Email not sent try again");
  }
});

//**************************
//**************************
//Reset password
const resetpassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.params;

  //Hash token before saving 
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //convert the resetToke to what is the database
  //find Toke in DB
  const userToken = await Token.findOne({
    token: hashedToken,
    expiredAt: { $gt: Date.now() },
  });


  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or Expired Token");
  }

  //if the token has not been expired we find the user
  const user = await User.findOne({ _id: userToken.userId });
  user.password = password;
  await user.save();
  res.status(200).json({
    message: "Password Reset successful, Please Login",
  });
});

module.exports = {
  registerUser: registerUser,
  loginUser: loginUser,
  logoutUser: logoutUser,
  getUser: getUser,
  loginStatus: loginStatus,
  updateUser: updateUser,
  changePassword: changePassword,
  forgotpassword: forgotpassword,
  resetpassword: resetpassword,
};
