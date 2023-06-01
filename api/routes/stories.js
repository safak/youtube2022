import express from "express";
import { getStories, addStory, deleteStory } from "../controllers/story.js";

const router = express.Router();

router.get("/test",(req,res)=>{
    res.send("it works")
})
router.get("/", getStories);
router.post("/", addStory);
router.delete("/:id", deleteStory);

export default router;