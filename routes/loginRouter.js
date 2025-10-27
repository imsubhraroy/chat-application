import express from 'express';
import loginController from '../controllers/loginController.js';

const router = express.Router();

//login page
router.get('/login', loginController);

export default router;