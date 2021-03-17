import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container style={{ color: '#51426c', marginTop: '1.5rem' }}>
            <Typography variant="h3" align="center" variantMapping={{ h3: 'h2' }}>404</Typography>
            <Typography variant="h4" align="center" variantMapping={{ h4: 'h2' }}>Page Not Found!</Typography>
            <Grid container justify="center" style={{marginTop:'1rem'}}>
                <Link to="/home"><Button variant="contained" color="primary">Home</Button></Link>
            </Grid>
        </Container>
    );
};

export default NotFound;