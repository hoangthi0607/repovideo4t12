import express from "express"
import  {signup, signin}  from "../controllers/auth.js"
const router = express.Router()

//CREATE USER
router.post("/signup", signup)
//SIGN IN
router.post("/signin", signin)
//GOOGLE
router.post("/google", )
export default router