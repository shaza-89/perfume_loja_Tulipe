import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js"

// @desc   Auth user and get token
// @route   GET /api/user/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
       
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
         const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
    
// @desc    logout user
// @route   POST /api/users/logout
// @access  private
const logoutUser = asyncHandler(async (req, res) => {

  res.status(200).json({ message: 'Logged out successfully' });

});
    
// @desc    Get user profile
// @route   Get /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
   
        const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }

});
    
// @desc    update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    
   if (user) {
 user.name = req.body.name || user.name;
 user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
        
  } else {
    res.status(404);
    throw new Error('User not found');
  }
     
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