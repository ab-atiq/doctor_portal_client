import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const OurBlog = () => {
    return (
        <Box sx={{ py: 4 }}>
            <Container>
                <Typography variant='h5' sx={{ color: 'rgb(55, 245, 242)', textTransform: 'uppercase' }}>
                    Our Blog
                </Typography>
                <Typography variant='h3'>
                    From Our Blog News
                </Typography>
                <Grid container sx={{ my: 3 }} spacing={3}>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275, border: '2px solid red' }}>
                            <CardContent>
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
                                <Typography sx={{ fontSize: 20, fontWeight: 500 }} color="text.secondary" gutterBottom>
                                    2 times of brush in a day can keep you healthy.
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus dicta libero perspiciatis aperiam. Illo perferendis neque aliquid, autem iure aspernatur temporibus expedita. Quasi soluta placeat illum quam sint laudantium?
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275, border: '2px solid red' }}>
                            <CardContent>
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
                                <Typography sx={{ fontSize: 20, fontWeight: 500 }} color="text.secondary" gutterBottom>
                                    2 times of brush in a day can keep you healthy.
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus dicta libero perspiciatis aperiam. Illo perferendis neque aliquid, autem iure aspernatur temporibus expedita. Quasi soluta placeat illum quam sint laudantium?
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275, border: '2px solid red' }}>
                            <CardContent>
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
                                <Typography sx={{ fontSize: 20, fontWeight: 500 }} color="text.secondary" gutterBottom>
                                    2 times of brush in a day can keep you healthy.
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus dicta libero perspiciatis aperiam. Illo perferendis neque aliquid, autem iure aspernatur temporibus expedita. Quasi soluta placeat illum quam sint laudantium?
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurBlog;