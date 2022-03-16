import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <Container sx={{ textAlign: 'left', pt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Typography variant='h6' sx={{ weight: 700, color: 'rgb(55, 245, 242)' }}>Info</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Emergency Dental Care</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Check Up</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Treatment of Personal Diseases</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Tooth Extraction</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Check Up</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant='h6' sx={{ weight: 700, color: 'rgb(55, 245, 242)' }}>Services</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Emergency Dental Care</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Check Up</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Treatment of Personal Diseases</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Tooth Extraction</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Check Up</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant='h6' sx={{ weight: 700, color: 'rgb(55, 245, 242)' }}>Oral Health</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Emergency Dental Care</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Check Up</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Treatment of Personal Diseases</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Tooth Extraction</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Check Up</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant='h6' sx={{ weight: 700, color: 'rgb(55, 245, 242)' }}>Our Address</Typography>
                    <Typography variant='h6' sx={{ weight: 500 }}>Chalk Hari Narayan, Manda, Naogaon</Typography>
                    <Box sx={{ my: 3 }}>
                        <FacebookIcon /><TwitterIcon /><GoogleIcon />
                    </Box>
                    <Typography variant='h6' sx={{ weight: 500 }}>Call Now</Typography>
                    <Button variant='contained' sx={{ weight: 500, background: 'rgba(55,245,242)' }}>+2025550295</Button>
                </Grid>
            </Grid>
            <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Copyright 2020 All Rights Reserved
            </Typography>
        </Container>
    );
};

export default Footer;