import { Button, Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Booking = ({ isSaved, setIsSaved }) => {

    const [bookings, setBookings] = useState([]);
    const [loggedUser, setLoggedUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://stormy-peak-22153.herokuapp.com/bookings?email=${loggedUser.email}`, {
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setIsSaved(null)
            })
    }, [isSaved, setIsSaved, loggedUser.email])


    const removeBooking = id => {
        fetch(`https://stormy-peak-22153.herokuapp.com/delete/${id}?email=${loggedUser.email}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(result => {
                setIsSaved(result);
            })
    }

    return (
        <Grid style={{ marginTop: '1rem' }} container spacing={5} justify="center" alignItems="center" alignContent="center" direction="column">
            {
                bookings.map(booking =>
                    <Grid item xs={12}>
                        {booking.bedType &&
                            <Typography variant="h6" variantMapping={{ h6: 'h2' }} color="inherit">Bed Type: {booking.bedType} Room.</Typography>
                        }
                        <Typography color="inherit">Check In: {new Date(booking.checkIn).toDateString('DD-mm-yyyy')}</Typography>

                        <Typography color="inherit">Check Out: {new Date(booking.checkOut).toDateString('DD-mm-yyyy')}</Typography>
                        <Button variant="outlined" onClick={() => removeBooking(booking._id)} color="inherit">Remove Booking</Button>
                    </Grid>)
            }
        </Grid>
    );
};

export default Booking;