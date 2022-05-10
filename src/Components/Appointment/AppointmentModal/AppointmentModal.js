import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function AppointmentModal({
  handleBookingOpen,
  handleBookingClose,
  booking,
  date,
  setBookingSuccessAlert,
}) {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [userInfo, setUserInfo] = React.useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserInfo = { ...userInfo };
    newUserInfo[field] = value;
    // console.log(newUserInfo);
    setUserInfo(newUserInfo);
  };

  const handleSubmit = (e) => {
    // collect data
    const appointment = {
      ...userInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    // send to the server
    // console.log(appointment);
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // alert('Booking appointment successfully !!!');
          setBookingSuccessAlert(true);
          handleBookingClose();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={handleBookingOpen}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={handleBookingOpen}>
          <Box sx={style}>
            <Typography
              style={{ color: "rgb(55, 245, 242)" }}
              id="transition-modal-title"
              variant="h4"
            >
              {name}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                disabled
                sx={{ width: "90%", my: 2 }}
                id="outlined-required"
                defaultValue={time}
              />
              <TextField
                sx={{ width: "90%", mb: 2 }}
                id="outlined-required"
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
              />
              <TextField
                sx={{ width: "90%" }}
                id="outlined-required"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
              />
              <TextField
                sx={{ width: "90%", my: 2 }}
                id="outlined-required"
                name="phone"
                onBlur={handleOnBlur}
                placeholder="Your Phone Number"
              />
              <TextField
                disabled
                sx={{ width: "90%", my: 2 }}
                id="outlined-required"
                defaultValue={date.toDateString()}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
