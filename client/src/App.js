import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/postActions';
import diary from './images/diary.png';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Search from "./components/Search/Search";
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    
    // Redux
    const dispatch = useDispatch();
    // Use action
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Diary</Typography>
                <img className={classes.image} src={diary} alt="icon" height="60" />
            </AppBar>
            <Container>
                
            </Container>
            {/* <Container>
                <Grid item xs={12} sm={12}>
                    <Search />
                </Grid>
            </Container> */}
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
