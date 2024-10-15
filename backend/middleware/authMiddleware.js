import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';


//  admin Middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export {admin };