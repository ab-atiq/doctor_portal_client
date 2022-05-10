import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    const email = e.target.value;
    setAdmin(email);
  };
  const handleSubmit = (e) => {
    const user = { admin };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ width: "40%" }}
          onBlur={handleOnBlur}
          label="Email"
          variant="standard"
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
        {success && <Alert severity="success">Add Admin successfully!!!</Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
