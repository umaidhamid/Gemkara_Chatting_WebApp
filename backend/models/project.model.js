import mongoose, { Types } from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
  },
  users: [{ type: Types.ObjectId, ref: "User" }],
  // password: {
  //   type: Number,
  //   required: true,
  //   trim: true,
  //   default: 0,
  // },
});
export default mongoose.model("Project", projectSchema);
