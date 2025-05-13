import express from "express";
import tetController from "../controllers/auth_controller.js";

const router = express.Router();

router.get("/", tetController.getTetSite);

export default router;
