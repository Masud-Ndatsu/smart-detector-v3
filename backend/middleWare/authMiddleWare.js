const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { verifyToken } = require("../utils/encryption");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(401);
      throw new Error("not authorized please login");
    }

    //verify token
    const verified = await verifyToken(token);
    //Get user id from token
    const user = await User.findById(verified.id).select("-password");
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("User not found");
  }
});

module.exports = protect;
