import userModel from "../models/user.model.js";

export const createUser = async ({ Username, Email, Password }) => {
  if (!Email || !Password) {
    console.log("require username or password");
  }
  const hashedPassword = await userModel.hashPassword(Password);
  const user = await userModel.create({
    Username,
    Email,
    Password: hashedPassword,
  });
  return user;
};
export const loginUser = async ({ Email, Password }) => {
  try {
    // Check if email and password are provided
    if (!Email || !Password) {
      throw new Error("Email and Password are required");
    }

    // Find user by email
    const user = await userModel.findOne({ Email }).select("+Password");
    if (!user) {
      throw new Error("User not found");
    }

    // Validate password
    const isValid = await user.isValidPassword(Password);
    if (!isValid) {
      throw new Error("Invalid password");
    }

    // Success: return user object
    return user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error; // Re-throw to handle in controller
  }
};
export const getAllUsersService = async () => {
  const users = await userModel.find({});
  users.Password = undefined; // Hide passwords
  return users;
};
