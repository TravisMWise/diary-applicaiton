import PostMessageSchema from "../models/postMessageSchema.js";


export const getPosts = async (req, res) =>{
    try {
        const postMessages = await PostMessageSchema.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const createPost = async (req, res) =>{
    res.send("Create Post");
}