import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import ResponsiveAppBar from "../Shared/AppBar/AppBar";
import Footer from "../Shared/Footer/Footer";
import CourseCard from "./CourseCard";

const Course = () => {
  const { user } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://doctor-portal-server-riwf.onrender.com/course`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h4" fontWeight="bold" py={2}>
          Welcome
          <span style={{ color: "orange" }}> {user.displayName}</span>, ready
          for start lesson?
        </Typography>
        <CourseCard course={data?.course} />
      </Container>
      <Footer />
    </div>
  );
};

export default Course;
