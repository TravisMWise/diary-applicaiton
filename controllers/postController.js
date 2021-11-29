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