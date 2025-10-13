import { Router } from "express";
import { body } from "express-validator";
import * as projectcontroller from "../controllers/project.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = Router();
router.post(
  "/create",
  body("name").notEmpty().withMessage("Project name is required"),
  // body("password").notEmpty().withMessage("Password is required"),
  authMiddleware,
  projectcontroller.createProject
);
router.post("/all", authMiddleware, projectcontroller.getAllProjects);
router.put(
  "/add-user",
  authMiddleware,
  body("ProjectId").isString().withMessage("project ID is required"),
  body("users")
    .isArray({ min: 1 })
    .withMessage("Users must be a non-empty array.")
    .custom((users) => {
      if (!users.every((user) => typeof user === "string")) {
        throw new Error("All users must be strings.");
      }
      return true;
    }),
  projectcontroller.addUserToProject
);
export default router;
