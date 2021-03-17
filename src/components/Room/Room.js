import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, Avatar, Grid, IconButton, Button } from '@material-ui/core/';
import { red } from '@material-ui/core/colors';
import HotelIcon from '@material-ui/icons/Hotel';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiCardActions-root': {
            justifyContent: 'space-between'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const Room = ({ room }) => {
    const classes = useStyles();

    const { price, avatar, bedType, capacity, bed, imgUrl, description, title } = room;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {avatar}
                        </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title={bedType}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton size="small">
                        <HotelIcon /> : {bed}
                    </IconButton>
                    <IconButton size="small">
                        <WcIcon /> : {capacity}
                    </IconButton>
                    <IconButton size="small">
                        <AttachMoneyIcon /> : {price}
                    </IconButton>
                    <Link to={`/book/${bedType}`}><Button size="medium" variant="contained" color="primary">Book</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Room;