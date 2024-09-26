import express from 'express';
import {
    authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js"
import { admin } from '../middleware/authMiddleware.js';


const router = express.Router();

router.route('/').post(registerUser).get(admin , getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(admin ,deleteUser).get(admin ,getUserById).put(admin ,updateUser);
  


export default router;