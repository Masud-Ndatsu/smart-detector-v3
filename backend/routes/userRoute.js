const { Router } = require("express");
const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const protect = require("../middleWare/authMiddleWare");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", protect, logoutUser);
router.get("/getUser", protect, getUser);
router.patch("/updateuser", protect, updateUser);
router.post("/forgotPassword", forgotPassword);
router.put("/resetpassword/:id/:resetToken", resetPassword);

module.exports = router;
