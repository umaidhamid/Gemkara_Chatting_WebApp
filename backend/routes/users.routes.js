import express from "express";
import { body } from "express-validator";
import { authMiddleware } from "../middleware/auth.middleware.js";
import * as usersController from "../controllers/users.controller.js";
export const router = express.Router();

router.get("/allUsers", authMiddleware, usersController.getAllUsersController);
export default router;
