import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ExceptionalDental = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container alignItems={"center"}>
        <Grid xs={12} md={5}>
          <img
            style={{ width: "400px" }}
            src="https://i.ibb.co/kK4qLSv/treatment.png"
            alt=""
          />
        </Grid>
        <Grid xs={12} md={7} style={{ textAlign: "left" }}>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h3">
              Exception Dental Care, on Your Terms
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ad delectus reprehenderit nam, numquam dignissimos exercitationem
              vero sint atque eos aperiam distinctio repudiandae dolores animi,
              accusantium aliquid qui mollitia commodi facere. Nisi velit iste,
              quas ducimus, id adipisci tempora eveniet nam soluta praesentium
              autem minima ab, temporibus vitae possimus at.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionalDental;
