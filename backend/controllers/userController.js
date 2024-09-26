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