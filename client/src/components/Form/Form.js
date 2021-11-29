import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useDispatch  } from 'react-redux';
import FileBase from 'react-file-base64';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/postActions';

const Form = ({ currentId, setCurrentId }) => {
    // Styles
    const classes = useStyles();
    
    // Use State
    const [postData, setPostData] = useState({ 
        creator: '', 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: '', 
        location: '',
        privacy: '', 
        sharedWith: '', 
    });
    
    // Redux
    // Find the post with the id that we clicked on if currentId exists
    const post = useSelector((state) => currentId 
        ? state.postReducers.find((p) => p._id === currentId) 
        : null
    );
    
    // Set the post information when the post value changes from the useSelector
    useEffect(() => {
        clear();
        if (post) 
            setPostData(post);
    }, [post])

    
    // api dispatch
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents refresh in the browser
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
    }

    const clear = () => {
        
    }

    return (
        // Div
        <Paper className={classes.paper}>
            {/* Form */}
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                {/* Title */}
                <Typography variant="h6">Creating A Diary Entry</Typography>

                {/* Username */}
                <TextField name="creator" variant="outlined" label="Creator" fullWidth  value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />

                {/* Title */}
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                {/* Message */}
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={10} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                {/* Tags */}
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                {/* File */}
                <div className={classes.fileInput}>
                    <Typography>Image:</Typography> 
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                
                {/* Location */}
                <TextField name="location" variant="outlined" label="Location" fullWidth value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })} />

                
                {/* Privacy */}
                <div className={classes.privacy}>
                    <RadioGroup>
                        <FormControlLabel className={classes.radioInput} value="public" control={<Radio />} label="Public" onChange={(e) => setPostData({ ...postData, privacy: e.target.value })}  />
                        <FormControlLabel className={classes.radioInput} value="private" control={<Radio />} label="Private" onChange={(e) => setPostData({ ...postData, privacy: e.target.value })}  />
                        <FormControlLabel className={classes.radioInput} value="share" control={<Radio />} label="Share" onChange={(e) => setPostData({ ...postData, privacy: e.target.value })} />
                        <TextField name="sharedWith" variant="outlined" label="Share With (coma separated):" fullWidth value={postData.sharedWith} onChange={(e) => setPostData({ ...postData, sharedWith: e.target.value.split(',') })} />
                    </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                {/* Clear Button */}
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;