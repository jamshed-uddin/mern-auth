import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
//desc  auth user
//route  POST/api/users/auth
//access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});
//desc  create new user
//route POST/api/users
//access public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Create new user" });
});
//desc  create new user
//route POST/api/users/logout
//access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});
//desc  get user profile
//route GET/api/users/profile
//access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile " });
});
//desc  update user profile
//route PUT/api/users/profile
//access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile " });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
