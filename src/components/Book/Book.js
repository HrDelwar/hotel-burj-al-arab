import MomentUtils from '@date-io/moment';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Booking from '../Booking/Booking';

const userStyles = {
    color: '#2d4fd6',
    fontWeight: '700',
    textTransform: 'uppercase'
}
const Book = () => {
    const { bedType } = useParams();
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [isSaved, setIsSaved] = useState(null);

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date(),
    });

    const handleCheckInDateChange = (date) => {
        const newSelectedDate = { ...selectedDate };
        newSelectedDate.checkIn = date;
        setSelectedDate(newSelectedDate);
    };
    const handleCheckOutDateChange = (date) => {
        const newSelectedDate = { ...selectedDate };
        newSelectedDate.checkOut = date;
        setSelectedDate(newSelectedDate);
    };

    const handleBooking = () => {
        const bookingInfo = { ...loggedUser, ...selectedDate, bedType };
        fetch('https://stormy-peak-22153.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(result => setIsSaved(result))
    };

    return (
        <Container style={{ color: '#51426c', marginTop: '1.5rem' }}>
            <Typography align="center" variantMapping={{ h4: 'h2' }} variant="h4">Welcome <span style={userStyles}>{loggedUser.name} </span>!!</Typography>
            <Typography align="center" variantMapping={{ h5: 'h2' }} variant="h5">Let's book a {bedType} Room!</Typography>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="LL"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check In Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Check Out Date"
                        format="LL"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOutDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid container justify="center">
                    <Button onClick={handleBooking} color="inherit" variant="outlined" >Book Now</Button>
                </Grid>
            </MuiPickersUtilsProvider>
            <Grid>
                <Booking isSaved={isSaved} setIsSaved={setIsSaved} />
            </Grid>
        </Container>
    );
};

export default Book;