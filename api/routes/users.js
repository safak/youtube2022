import express from "express";
import {getAllUser, getUser , updateUser} from "../controllers/user.js";

const router = express.Router()

router.get("/test",(req,res)=>{
    res.send("it works")
})

router.get("/find/:userId", getUser)
router.put("/", updateUser)
router.get("/",getAllUser)



export default router