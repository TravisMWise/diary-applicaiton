import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    isPrivate: Boolean,
    sharedWith: [String],
})

var PostMessageSchema = mongoose.model('PostMessageSchema', postSchema);

export default PostMessageSchema;