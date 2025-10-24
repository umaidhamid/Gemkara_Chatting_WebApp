import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    unique: true,
    required: true,
    minlength: [4, "Username must be at least 4 characters long"],
    maxlength: [15, "Username must not be longer than 15 characters"],
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: [6, "Email must be at least 6 characters long"],
    maxlength: [50, "Email must not be longer than 50 characters"],
  },
  Password: {
    type: String,
    required: true,
    select: false, // exclude password from queries by default
  },
  Friends : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
});

// Hash password before saving
userSchema.statics.hashPassword = async function (Password) {
  return await bcrypt.hash(Password, 10);
};

// Compare password
userSchema.methods.isValidPassword = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

// Generate JWT
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { Email: this.Email, id: this._id, Username: this.Username },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );
};
const userModel = mongoose.model("User", userSchema);
export default userModel;
