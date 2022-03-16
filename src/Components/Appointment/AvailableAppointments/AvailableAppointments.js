import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import Alert from '@mui/material/Alert';


const bookings = [
    {
        id: 1,
        name: 'Teeth orthodontics',
        time: '8.00 Am - 9.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '9.00 Am - 10.00 AM',
        space: 12
    },
    {
        id: 3,
        name: 'Teeth Dentistry',
        time: '10.00 Am - 11.00 AM',
        space: 16
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '07.00 Am - 8.30 AM',
        space: 19
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 Am - 08.00 AM',
        space: 56
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '08.00 Am - 11.00 AM',
        space: 16
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccessAlert, setBookingSuccessAlert] = useState(false);

    return (
        <Container>
            <Typography variant='h4' sx={{ mb: 4 }}>Available Appointment on {date.toDateString()}</Typography>
            {
                bookingSuccessAlert && <>
                    <Alert severity="success">Booking Successfully !!</Alert>
                    <br />
                </>
            }
            <Grid container spacing={3}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} setBookingSuccessAlert={setBookingSuccessAlert}></Booking>)
                }
            </Grid>
        </Container >
    );
};

export default AvailableAppointments;