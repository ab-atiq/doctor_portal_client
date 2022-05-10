import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const contactBackground = {
  backgroundImage: `url(https://i.ibb.co/0BnQHbn/bg.png)`,
  backgroundColor: "rgba(45,58,74,.4)",
  backgroundBlendMode: "darken, luminosity",
};

const ContactHome = () => {
  return (
    <Container style={contactBackground} sx={{ py: 5 }}>
      <Typography variant="h5">CONTACT US</Typography>
      <Typography variant="h3">Always Connect with us</Typography>
      <form action="">
        <TextField
          sx={{ width: "70%", my: 5 }}
          id="filled-size-normal"
          placeholder="Your Name"
          variant="filled"
        />
        <TextField
          sx={{ width: "70%" }}
          id="filled-size-normal"
          placeholder="Email"
          variant="filled"
        />
        <TextField
          sx={{ width: "70%", my: 5 }}
          id="filled-size-normal"
          placeholder="Write your comment"
          variant="filled"
        />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactHome;
