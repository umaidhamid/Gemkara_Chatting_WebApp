import * as projectService from "../services/project.service.js";
import { ExpressValidator, validationResult } from "express-validator";

export const createProject = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  try {
    const { name } = req.body;
    const userId = req.user.id; // Assuming authMiddleware attaches user info to req.user
    const newProject = await projectService.createprojectService({
      name,
      userId,
    });
    res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ heo: "helpo", error: error.message });
  }
};
export const getAllProjects = async (req, res) => {
  try {
    const id = req.user.id;
    const allUserProjects = await projectService.getAllProjectsById({
      UserId: id,
    });

    return res.status(200).json({
      Projects: allUserProjects,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
export const addUserToProject = async (req, res) => {
  const error = ExpressValidator(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {
    const { ProjectId, users } = req.body;
    
  } catch (e) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};
