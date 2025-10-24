import * as userservice from "../services/user.service.js";
import { ExpressValidator, validationResult } from "express-validator";
export const getAllUsersController = async (req, res) => {
    console.log("getAllUsersController called");
  try {
    const allUsers = await userservice.getAllUsersService();
    return res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    console.error("Error in getAllUsersController:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
