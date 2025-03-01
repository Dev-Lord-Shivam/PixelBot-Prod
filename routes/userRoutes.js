import express from 'express'
import { createUser,getUserHistory,login, logoutUser, syncHistory } from '../controller/userController.js';
import Authorize from '../middleware/Authorize.js';

const router = express.Router();

router.get('/logout', logoutUser)
router.get('/gethistory/:id', Authorize, getUserHistory);
router.post('/signin', login);
router.post('/register', createUser);
router.post('/synchistory',Authorize,syncHistory)

export default router;