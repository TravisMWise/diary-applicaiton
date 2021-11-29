import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
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
    isPrivate: Boolean,
    sharedWith: [String],
})
// By default, Mongoose adds an _id property to your schemas.
// schema.path('_id'); // ObjectId { ... }

const PostMessageSchema = mongoose.model('PostMessageSchema', postSchema);

export default PostMessageSchema;