import userModel from "../models/user.model.js";
import { createUser, loginUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
import radisClient from "../services/radis.js";
export const createUserController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {
    const user = await createUser(req.body);
    user.Password = undefined;
    const token = user.generateJWT();
    res.status(201).json({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
export const loginController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {
    const { Email, Password } = req.body;
    console.log("Request Body:", req.body);

    const user = await loginUser({ Email, Password });
    user.Password = undefined;
    const token = user.generateJWT();
    const safeUser = {
      id: user._id,
      username: user.Username,
      email: user.Email,
    };
    res.cookie("authToken", token, {
      httpOnly: true, // can't be accessed by JS
      secure: true, // only works over HTTPS
      sameSite: "strict", // prevent CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: safeUser,
      token,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
export const profilecontroller = async (req, res) => {
  res.json({
    msg: "hello sir",
  });
};
export const logoutController = async (req, res) => {
  try {
    const token =
      req.cookies.authToken;

    if (!token) return res.status(400).json({ message: "No token provided" });

    await radisClient.set(token, "logout", "EX", 7 * 24 * 60 * 60);
    res.clearCookie("authToken");
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const me= (req,res)=>{
  res.status(200).json({
    msg:"User authenticated successfully"
  })
}
