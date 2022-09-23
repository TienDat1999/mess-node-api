import express from "express"
import { RegisterAccount, Login } from "../controllers/auth.js"

const router = express.Router()
router.post("/register", RegisterAccount)
router.post("/login", Login)
export default router
