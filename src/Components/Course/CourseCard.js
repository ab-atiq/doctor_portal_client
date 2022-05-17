import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function CourseCard({ course }) {
  return (
    <Box>
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Teeth Dentistry"
              image="http://www.ghcchina.com/ezfiles/37/1037/img/869/img_list07.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Teeth Dentistry
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Typography alignItem="center">
              <Link to={`/course/${course}`}>
                <Button variant="contained">Continue</Button>
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Teeth Dentistry"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLIYVTzTX3qeXultAVI4jRtf1DWSWDPHJfw&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Oral Surgery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Typography alignItem="center">
              <Link to={`/course/${course}`}>
                <Button variant="contained">Continue</Button>
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Cosmetic Dentistry"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QHA_kvwLpl3G-7sQRFG_ag7YrBE6aoQZ-w&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cosmetic Dentistry
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Typography alignItem="center">
              <Link to={`/course/${course}`}>
                <Button variant="contained">Continue</Button>
              </Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
