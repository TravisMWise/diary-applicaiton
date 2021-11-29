import { Container, Typography} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Search = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Typography className={classes.heading} variant="h2" align="center">Search</Typography>
        </Container>
        
    );
}

export default Search;