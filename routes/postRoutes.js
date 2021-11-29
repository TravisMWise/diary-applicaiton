import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/postController.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// patch is used for updating existing documents
router.patch('/:id', updatePost) // id is dynamic b/c we need to know the id of what we want ot edit
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


export default router;