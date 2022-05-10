import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Calendar from "../../Shared/Calendar/Calendar";

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} md={6}>
            <Calendar date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "500px" }}
              src="https://i.ibb.co/cFKtq8Q/chair.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
