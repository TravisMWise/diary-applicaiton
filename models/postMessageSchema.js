import mongoose from 'mongoose';

// By default, Mongoose adds an _id property to schemas.
// schema.path('_id'); // ObjectId { ... }
const postSchema = mongoose.Schema({
    title: String, // String is shorthand for {type: String}
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
    privacy: String,
    sharedWith: [String],
})

const PostMessageSchema = mongoose.model('PostMessageSchema', postSchema);

export default PostMessageSchema;