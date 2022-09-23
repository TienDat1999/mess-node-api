import express from "express"
import { getUsers } from "../controllers/user.js"
import {verifyToken}  from '../middlewares/verifyToken.js'

const router = express.Router()
router.get("/", verifyToken, getUsers)

export default router
