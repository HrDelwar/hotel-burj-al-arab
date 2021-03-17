import { Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const userStyles = {
    color : '#2d4fd6',
    fontWeight:'700',
    textTransform:'uppercase'
}
const Book = () => {
    const { bedType } = useParams();
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    return (
        <Container style={{ color: '#51426c', marginTop: '1.5rem' }}>
            <Typography align="center" variantMapping={{ h4: 'h2' }} variant="h4">Welcome <span style={userStyles}>{loggedUser.name} </span>!!</Typography>
            <Typography align="center" variantMapping={{ h5: 'h2' }} variant="h5">We are extremely sorry! {bedType} Room is not available now.</Typography>
        </Container>
    );
};

export default Book;