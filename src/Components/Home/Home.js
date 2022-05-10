import { Box } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../Shared/AppBar/AppBar";
import Footer from "../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import ContactHome from "./ContactHome/ContactHome";
import ExceptionalDental from "./ExceptionalDental/ExceptionalDental";
import Header from "./Header/Header";
import OurBlog from "./OurBlog/OurBlog";
import OurDoctorHome from "./OurDoctorHome/OurDoctorHome";
import ServiceHome from "./ServiceHome/ServiceHome";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Header />
      <ServiceHome />
      <ExceptionalDental />
      <AppointmentBanner />
      <Testimonial />
      <OurBlog />
      <OurDoctorHome />
      <ContactHome />
      <Footer />
    </Box>
  );
};

export default Home;
