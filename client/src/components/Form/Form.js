import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useDispatch  } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost } from '../../actions/postActions';


const Form = () => {
    // Styles
    const classes = useStyles();
    
    // Use State
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', privacy: '', sharedWith: ''});
    
    // api dispatch
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents refresh in the browser
        dispatch(createPost(postData));
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
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                {/* Tags */}
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                {/* File */}
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>

                {/* Privacy */}
                <RadioGroup>
                    <FormControlLabel className={classes.radioInput} value="public" control={<Radio />} label="Public" onChange={(e) => setPostData({ ...postData, privacy: e.target.value })}  />
                    <FormControlLabel className={classes.radioInput} value="private" control={<Radio />} label="Private" onChange={(e) => setPostData({ ...postData, privacy: e.target.value })}  />
                    <FormControlLabel className={classes.radioInput} value="share" control={<Radio />} label="Share" onChange={(e) => setPostData({ ...postData, privacy: e.target.value })} />
                    <TextField name="sharedWith" variant="outlined" label="Share With (coma separated):" fullWidth value={postData.sharedWith} onChange={(e) => setPostData({ ...postData, sharedWith: e.target.value.split(',') })} />
                </RadioGroup>

                {/* Submit Button */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                {/* Clear Button */}
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;