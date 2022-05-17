import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";

const OurDoctorHome = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ color: "rgb(55, 245, 242)", fontWeight: 700 }}
      >
        OUR DOCTORS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/YjFx57N/doctor-small.png"
            alt=""
          />
          <Typography variant="h6">Dr. Caudi</Typography>
          <Typography variant="body1">
            <CallIcon /> +0123456789
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/YjFx57N/doctor-small.png"
            alt=""
          />
          <Typography variant="h6">Dr. Caudi</Typography>
          <Typography variant="body1">
            <CallIcon /> +0123456789
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/YjFx57N/doctor-small.png"
            alt=""
          />
          <Typography variant="h6">Dr. Caudi</Typography>
          <Typography variant="body1">
            <CallIcon /> +0123456789
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurDoctorHome;
