import jwt from "jsonwebtoken";
import redisClient from "../services/radis.js";

export const authMiddleware = async (req, res, next) => {
  try {
    // Get token from cookie OR Authorization header
    const token =
      req.cookies?.authToken;
      // console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ error: "No token provided, please authenticate" });
    }
    const IsBlackListed = await redisClient.get(token);
    if (IsBlackListed) {
      res.cookie("authToken", " ");
      return res
        .status(401)
        .json({ error: "Token is blacklisted, please login again" });
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (err) {
    res
      .status(401)
      .json({ error: "Invalid or expired token, please authenticate" });
  }
};
