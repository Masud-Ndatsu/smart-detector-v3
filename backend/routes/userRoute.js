const { Router } = require("express");
const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
  forgotpassword,
  resetpassword,
} = require("../controllers/userController");
const protect = require("../middleWare/authMiddleWare");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getUser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/upDatePassword", protect, changePassword);
router.post("/forgotpassword", forgotpassword);
router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;
