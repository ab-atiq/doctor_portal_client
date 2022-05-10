import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../../images/bg.png";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74,.6)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "100px",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              style={{ marginTop: "-135px", width: "550px" }}
              src="https://i.ibb.co/1Zb2bc1/doctor.png"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: "rgb(55, 245, 242)", mb: 2 }}>
              APPOINTMENT
            </Typography>
            <Typography variant="h3" sx={{ mb: 2, color: "white" }}>
              Make an appointment Today
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(55, 245, 242)" }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
