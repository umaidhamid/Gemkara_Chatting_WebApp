import mongoose from "mongoose";
import projectModel from "../models/project.model.js";

export const createprojectService = async ({ name, userId, password }) => {
  if (!name) throw new Error("Project name is required");
  if (!userId) throw new Error("User ID is required");
  // if (!password) throw new Error("Password is required");
  const existingProject = await projectModel.findOne({
    name: name.toLowerCase(),
  });
  if (existingProject) throw new Error("Project name already exists");

  const project = new projectModel({ name, users: [userId] });
  await project.save();
  return project;
};
export const getAllProjectsById = async ({ UserId }) => {
  if (!UserId) {
    throw new Error("User Id is Required ");
  }
  const alluserprojects = await projectModel.find({ users: UserId });
  return alluserprojects;
};
export const addUsersToProject = async ({ ProjectId, users, userId }) => {
  if (!ProjectId) {
    throw new Error("project Id Must be required ");
  }
  if (!users) {
    throw new Error("Users Id Must be required ");
  }
  if (!userId) {
    throw new Error("User Id Must be required ");
  }
  if (!mongoose.Types.ObjectId.isValid(ProjectId)) {
    throw new Error("invalid project id");
  }
  if (!mongoose.Types.ObjectId.isValid(user)) {
    throw new Error("invalid user id");
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("invalid project id");
  }
  const project = await projectModel.findOne({ _id: ProjectId, users: userId });
  if (!project) {
    throw new Error("user not blong to this project ");
  }
  const updateproject = await projectModel.findOneAndUpdate(
    {
      _id: ProjectId,
    },
    {
      $addToSet: {
        users: {
          $each: users,
        },
      },
    },
    { new: true }
  ); 
};
