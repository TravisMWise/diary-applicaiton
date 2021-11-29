import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.postReducers);
    console.log(posts);
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post></Post>
            <Post></Post>
        </>
    );
}

export default Posts;