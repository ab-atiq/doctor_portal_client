import React from "react";
import ResponsiveAppBar from "../Shared/AppBar/AppBar";
import Footer from "../Shared/Footer/Footer";
import AppointmentHeader from "./AppointmentHeader/AppointmentHeader";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <ResponsiveAppBar />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
