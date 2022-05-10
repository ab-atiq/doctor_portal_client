import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={5}>
        <Typography variant="h3">Calendar</Typography>
        <Calendar date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={12} sm={12} md={7}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
