import { AppBar, Button, Grid, makeStyles, Typography, } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import hotelBg from '../../images/bgHotel.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '350px',
        color: '#fff',
        background: `url(${hotelBg}) no-repeat`,
        backgroundSize: 'cover',
        '& a:focus': {
            outline: 'none',
        },
        '& .active .MuiButton-text': {
            background: '#1c1212'
        },
        '& .MuiButton-text:hover': {
            background: '#1c1212'
        },
        '& .MuiTypography-h2': {
            marginTop: '2rem',
            textTransform: 'capitalize',
        }

    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#fff'
    },

}));

const Header = () => {
    const classes = useStyles();
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    return (
        <AppBar position="static" color="inherit" className={classes.root}>
            <Grid container justify="center">
                <NavLink to='/home'>
                    <Button edge="start" className={classes.menuButton} aria-label="menu">Home</Button>
                </NavLink>
                {(loggedUser.name && loggedUser.email)? <Button edge="start" onClick={() => {
                    setLoggedUser({})
                    sessionStorage.removeItem('token')
                }} className={classes.menuButton} aria-label="menu">Logout</Button>: <NavLink to='/login'>
                    <Button edge="start" className={classes.menuButton} aria-label="menu">Login</Button>
                </NavLink>}
                
                <NavLink to='/book/Single'>
                    <Button edge="start" className={classes.menuButton} aria-label="menu">Book</Button>
                </NavLink>
            </Grid>
            <Typography variant="h2" color="inherit">Burj al arab</Typography>
            <Typography variant="overline" color="inherit">A global icon of arabian luxury.</Typography>
        </AppBar>

    );
};

export default Header;