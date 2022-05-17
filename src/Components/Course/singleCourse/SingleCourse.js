import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import CourseVideo from "./CourseVideo";

const SingleCourse = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch(`http://localhost:5000/course`)
//       .then((res) => res.json())
//       .then((data) => setData(data[0]?.data));
//   }, []);
//   console.log(data);
  return (
    <div style={{backgroundColor:"##F3F5F9"}}>
      <ResponsiveAppBar />
      <CourseVideo />
      <Footer />
    </div>
  );
};

export default SingleCourse;
