import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Testimonial = () => {
    return (
        <Container>
            <Grid sx={{ textAlign: 'left', my: 5 }}>
                <Typography variant='h6'>TESTIMONIAL</Typography>
                <Typography variant='h4'>What's Our Patients Says</Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275, border: '2px solid red' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus dicta libero perspiciatis aperiam. Illo perferendis neque aliquid, autem iure aspernatur temporibus expedita. Quasi soluta placeat illum quam sint laudantium?
                            </Typography>
                            <Grid container xs={12} alignItems={'center'}>
                                <Grid item xs={3}>
                                    <img src="https://i.ibb.co/t3VKnps/people-3.png" alt="" />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant='h6' sx={{ color: 'rgb(55, 245, 242)' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant='h5'>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275, border: '2px solid red' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus dicta libero perspiciatis aperiam. Illo perferendis neque aliquid, autem iure aspernatur temporibus expedita. Quasi soluta placeat illum quam sint laudantium?
                            </Typography>
                            <Grid container xs={12} alignItems={'center'}>
                                <Grid item xs={3}>
                                    <img src="https://i.ibb.co/93k5nd5/people-2.png" alt="" />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant='h6' sx={{ color: 'rgb(55, 245, 242)' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant='h5'>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275, border: '2px solid red' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus dicta libero perspiciatis aperiam. Illo perferendis neque aliquid, autem iure aspernatur temporibus expedita. Quasi soluta placeat illum quam sint laudantium?
                            </Typography>
                            <Grid container xs={12} alignItems={'center'}>
                                <Grid item xs={3}>
                                    <img src="https://i.ibb.co/xHhvpZj/people-1.png" alt="" />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant='h6' sx={{ color: 'rgb(55, 245, 242)' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant='h5'>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;