import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const ServiceHome = () => {
    return (
        <Box>
            <Container maxWidth='xl'>
                <h3>OUR SERVICES</h3>
                <h1>Services We Provide</h1>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/zrDvjmy/fluoride.png" alt="" />
                        {/* <CardMedia
                            component="img"
                            image="https://i.ibb.co/zrDvjmy/fluoride.png"
                            alt="Paella dish"
                        /> */}
                        <h3>Fluoride Treatment</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates nostrum vel placeat nisi non!</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/sKdLSw5/cavity.png" alt="" />
                        {/* <CardMedia
                            component="img"
                            image="https://i.ibb.co/sKdLSw5/cavity.png"
                            alt="Paella dish"
                        /> */}
                        <h3>Cavity Filling</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates nostrum vel placeat nisi non!</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/K9gmbFd/whitening.png" alt="" />
                        {/* <CardMedia
                            component="img"
                            image="https://i.ibb.co/K9gmbFd/whitening.png"
                            alt="Paella dish"
                        /> */}
                        <h3>Teeth Whitening</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates nostrum vel placeat nisi non!</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ServiceHome;