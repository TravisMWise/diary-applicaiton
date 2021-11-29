import mongoose from "mongoose";
import PostMessageSchema from "../models/postMessageSchema.js";

export const getPosts = async (req, res) =>{
    try {
        const postMessages = await PostMessageSchema.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const createPost = async (req, res) =>{
    // The post will be passed in the request
    const requestInformation = req.body;
    // Make a new post using the schema
    const newPost = new PostMessageSchema(requestInformation);

    // Try to save the post
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params; // id: _id renames id to _id

    // Get the post information we want to update (sent from the front end)
    const post = req.body;

    // Check if _id is an existing mongooseDB id
    // If it isn't then send an error message
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    // Only here if the id is valid
    const updatedPost = await PostMessageSchema.findByIdAndUpdate(_id, post, { new: true });
    
    // Send the post information
    res.json(updatedPost);
}
