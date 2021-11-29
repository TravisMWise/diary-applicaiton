import { Container, Typography, AppBar} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Search = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h4" align="center">Search</Typography>
        </AppBar>
    );
}

export default Search;