import { Alert, Stack } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Notifications = () => {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="container">
            <h1>Notification</h1>
          </div>
          <Stack sx={{ width: "80%" }} spacing={2} margin="20px">
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
            <Alert severity="warning">
              This is a warning alert — check it out!
            </Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Notifications;
