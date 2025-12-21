import express from "express";
import { getAllUsers, getMyProfile } from "../controllers/user.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const fetchUser = express.Router();

// GET /api/users
fetchUser.get("/", getAllUsers);
fetchUser.get("/me",requireAuth,getMyProfile)

export default fetchUser;
