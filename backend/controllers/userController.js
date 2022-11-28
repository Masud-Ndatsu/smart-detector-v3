const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const {
  generateToken,
  verifyHash,
  createHash,
  verifyToken,
} = require("../utils/encryption");

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
  const hashedPassword = await createHash(password);
  //create new user if it does not exists
  const user = await User.create({ ...req.body, password: hashedPassword });
  //get back the user information if already registered
  if (user) {
    res.status(201).json(user);
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
    res.status(403);
    throw new Error("user not found please create an account");
  }

  //User exist, now checking if password is correct
  const isValid = await verifyHash(password, user.password);
  if (!isValid) {
    res.status(403);
    throw new Error("Incorrect user password");
  }
  //generating token after creating user
  const token = await generateToken(user._id);
  let oldTokens = user.tokens || [];
  if (oldTokens.length) {
    oldTokens = oldTokens.filter((t) => {
      const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
      if (timeDiff < 86400) {
        return t;
      }
    });
  }
  await User.findByIdAndUpdate(user._id, {
    tokens: [...oldTokens, { token, signedAt: Date.now().toString() }],
  });

  user.tokens = undefined;
  //show user information if password is correct
  return res.status(200).json({ success: true, user, token });
});

//**********************
//**********************
//********************************** */

//LOGOUT

const logoutUser = asyncHandler(async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  const tokens = req.user.tokens;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization failed",
    });
  }
  const newTokens = tokens.filter((t) => t !== token);
  await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
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
  user.tokens = undefined;
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//**************************
//**************************

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
    res.status(200).json({ updateUser });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//**************************
//**************************
//forgot password
//**************************
//**************************
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  const secret = process.env.JWT_SECRET + user.password;

  // Reset Token
  const resetToken = await generateToken(user._id, secret);

  //construct a reset Url
  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${user._id}/${resetToken}`;
  console.log(resetUrl);
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
    // await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "rest email sent" });
  } catch (error) {
    throw new Error("Email not sent try again");
  }
});

//**************************
//**************************
//Reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { resetToken, id } = req.params;
  const user = await User.findById(id);
  const secret = process.env.JWT_SECRET + user.password;

  const userToken = await verifyToken(resetToken, secret);
  console.log(userToken);

  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or Expired Token");
  }
  const _password = await createHash(password);

  //if the token has not been expired we find the user
  const result = await User.findByIdAndUpdate(id, { password: _password });
  res.status(200).json({
    message: "Password Reset successful, Please Login",
  });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  forgotPassword,
  resetPassword,
};
