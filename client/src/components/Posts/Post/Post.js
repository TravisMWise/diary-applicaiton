import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


const Post = ({ post, setCurrentId}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>

            {/* Image */}
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>

            <div className={classes.overlay}>
                {/* Creator */}
                <Typography variant="h6">{post.creator}</Typography>

                {/* Time created */}
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {/* ... */}
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={ () => setCurrentId(post._id) }>
                    <MoreHorizIcon fontSize="medium" /> 
                </Button>
            </div>

            {/* Tags */}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            {/* Title */}
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>

            {/* Message content */}
            <CardContent>
                <Typography variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>

            {/* Location */}
            <CardContent>
                <Typography className={classes.location} variant="h6" gutterBottom>{post.location}</Typography> <br/>
                {/* <a target="_blank" href="https://www.google.com/maps">
                    Find Location
                </a> */}
            </CardContent>

            <CardActions className={classes.cardActions}>

                {/* Like */}
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like 
                    {post.likeCount}
                </Button>

                {/* Delete */}
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                
            </CardActions>
        </Card>
    );
}

export default Post;