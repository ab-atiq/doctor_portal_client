import React from "react";
import { Box, Button, Container, Grid, ImageListItem } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ my: 10, textAlign: "left" }}>
        <Grid container direction="row" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <h1>Your New Smile Starts Here</h1>
            <p style={{ my: 3 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae maiores sint, reprehenderit numquam ullam labore
              impedit maxime veniam aperiam vel id perspiciatis quisquam non
              suscipit fuga culpa assumenda laboriosam incidunt.
            </p>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(55, 245, 242)", color: "white" }}
            >
              GET APPOINTMENT
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img
                src="https://i.ibb.co/cFKtq8Q/chair.png"
                srcSet=""
                alt="chair"
                loading="lazy"
                style={{ width: "100%" }}
              />
            </ImageListItem>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
