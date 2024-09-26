import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js"

// @desc   Auth user and get token
// @route   GET /api/user/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
    res.send("auth user");
    
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
        res.send("Register user");

});
    
// @desc    logout user
// @route   POST /api/users/logout
// @access  private
const logoutUser = asyncHandler(async (req, res) => {
        res.send("logout user");

});
    
// @desc    Get user profile
// @route   Get /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
        res.send("get User Profile");

});
    
// @desc    update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
        res.send("update User Profile");
});
    
// @desc    Get users
// @route   Get /api/users
// @access  private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("get Users ");
});

// @desc    Get user by id
// @route   Get /api/users/:id
// @access  private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send("get Users By ID ");
});
    
// @desc    Delete users
// @route   DELETE /api/users/:id
// @access  private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send("delete User ");
});
    
// @desc    update user
// @route   PUT /api/users/:id
// @access  private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("update User");
    });
    
export {
 authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
    }