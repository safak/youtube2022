import { Card, Chip, Badge, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MailIcon from "@mui/icons-material/Mail";

import "./Badge.scss";
const Badges = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container">
          <h1>Badge</h1>
        </div>
        <Card variant="outlined" className="card">
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
        </Card>
        <Card sx={{ width: "80%" }} className="card">
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="warning">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="info">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="info">
            <MailIcon color="action" />
          </Badge>
        </Card>

        <Card
          sx={{ width: "80%", maxWidth: 500 }}
          style={{ margin: "20px", padding: "20px" }}
        >
          <Badge badgeContent={4} color="success">
            <h1>h1. Heading</h1>
          </Badge>
          <br />
          <Badge badgeContent={"hi"} color="secondary">
            <h2>h2. Heading</h2>
          </Badge>
          <br />

          <Badge badgeContent={4} color="warning">
            <h3>h3. Heading</h3>
          </Badge>
        </Card>
      </div>
    </div>
  );
};

export default Badges;
