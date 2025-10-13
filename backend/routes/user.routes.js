import express from "express";
import { body } from "express-validator";
import * as userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post(
  "/register",
  body("Email").isEmail().withMessage("Email must be valid"),
  body("Password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters"),
  body("Username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters"),
  userController.createUserController
);
router.post(
  "/login",
  body("Email").isEmail().withMessage("Email must be valid"),
  body("Password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters"),
  userController.loginController
);
router.get("/profile", authMiddleware, userController.profilecontroller);
router.get("/logout", authMiddleware, userController.logoutController);
router.get("/me", authMiddleware, userController.me);
export default router;

