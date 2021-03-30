import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { getUserTokenFirebase, handleGoogleSignInFirebase } from './LoginManager';

const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathName: '/' } };

    const handleGoogleSignIn = () => {
        handleGoogleSignInFirebase().then(res => {
            const { displayName, email } = res;
            const userInfo = { name: displayName, email };
            getUserTokenFirebase()
                .then(idToken => {
                    sessionStorage.setItem('token', idToken);
                    setLoggedUser(userInfo);
                    history.replace(from);
                })
        })
    }
    return (
        <Container style={{ color: '#51426c', marginTop: '1.5rem' }}>
            <Typography variantMapping={{ h4: 'h2' }} variant="h4" align="center">You Need To Login</Typography>
            <Grid container style={{ marginTop: '1rem' }} justify="center">
                <Button onClick={handleGoogleSignIn} size="small" color="inherit" variant="outlined">Sign in with google</Button>
            </Grid>
        </Container>
    );
};

export default Login;