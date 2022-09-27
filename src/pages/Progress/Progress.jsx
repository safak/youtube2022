import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Progress = () => {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="container">
            <h1>Progress</h1>
          </div>
          <Stack
            sx={{ color: "grey.500" }}
            spacing={2}
            direction="row"
            margin="20px"
          >
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="primary" />
            <CircularProgress color="inherit" />
          </Stack>

          <Stack
            sx={{ width: "80%", color: "grey.500" }}
            spacing={2}
            margin="20px"
          >
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="primary" />
            <LinearProgress color="inherit" />
          </Stack>

          <Card sx={{ maxWidth: 345 }} style={{ margin: "30px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/300/200"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" variant="contained">
                Share
              </Button>
              <Button size="small" color="secondary" variant="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Progress;
