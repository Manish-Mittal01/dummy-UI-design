import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PasswordIcon from "@mui/icons-material/Password";
import { useNavigate } from "react-router-dom";

export default function Timeout() {
  const navigate = useNavigate();
  return (
    <Box className="mainTimeOut">
      <Card
        className="card"
        style={{
          background: "#f1f1f1",
          boxShadow: "none",
          borderRadius: "8px",
          boxShadow: "0px 0px 500px lightgrey",
        }}
      >
        <center>
          <Typography
            className="inavlidSession"
            height="52px"
            bgcolor={"#F88372"}
            color={"red"}
          >
            Invalid session
          </Typography>
          <div className="sessionTimeoutBody">
            <PasswordIcon
              sx={{
                marginTop: "22px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "#F88379",
                width: 53,
                height: 53,
                padding: "8px",
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                The session timed out!
              </Typography>
              <Typography
                sx={{ mb: 1.5, font: "message-box" }}
                color="text.secondary"
              >
                You've been logged out for security reasons
              </Typography>
            </CardContent>
          </div>
        </center>
        <CardActions style={{ backgroundColor: "#fff", paddingBottom: "32px" }}>
          <Button
            size="small"
            className="btn"
            sx={{
              backgroundColor: "black",
              color: "white",
              paddingInline: "24px",
              marginInline: "auto",
            }}
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
