import { Button, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const Booking = ({ booking, date, setBookingSuccessAlert }) => {
  const { name, time, space } = booking;
  const [open, setOpen] = React.useState(false);

  const handleBookingOpen = () => setOpen(true);
  const handleBookingClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="h5" sx={{ color: "rgb(55, 245, 242)" }}>
            {time}
          </Typography>
          <Typography variant="h6">{space} spaces available</Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ backgroundColor: "rgb(55, 245, 242)" }}
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <AppointmentModal
        handleBookingOpen={open}
        handleBookingClose={handleBookingClose}
        booking={booking}
        date={date}
        setBookingSuccessAlert={setBookingSuccessAlert}
      />
    </>
  );
};

export default Booking;
