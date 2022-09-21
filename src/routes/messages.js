import express from "express";
import {
  getMessages,
  createMessage,
  getMessagesFilter,
} from "../controllers/message.js";

const router = express.Router();
router.get("/", getMessages);
router.post("/", createMessage);
router.post("/filtered", getMessagesFilter);

export default router;
