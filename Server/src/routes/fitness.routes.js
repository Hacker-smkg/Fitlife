import express from "express";
import { getFitnessData, addFitnessData, updateFitnessData, deleteFitnessData } from "../controllers/fitness.controller.js";

const fitnessRoutes = express.Router();

// Get records for a specific user
fitnessRoutes.get("/:userId", getFitnessData);

// Add new fitness entry
fitnessRoutes.post("/", addFitnessData);

//Update fitness entry
fitnessRoutes.put("/:id",updateFitnessData);
//Delete fitness entry
fitnessRoutes.delete("/:id",deleteFitnessData);

export default fitnessRoutes;
