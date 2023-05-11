import { Box, Divider, Grid, SwipeableDrawer, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./signin.module.css";
import { useNavigate } from "react-router-dom";

const Main = ({ verifyOtp, toggleDrawer }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const anchor = "right";
  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={verifyOtp[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "currentcolor",
            paddingInline: " 16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{ color: "white", marginBottom: "67px" }}
            className={styles.sideModalHeader}
          >
            <Grid container spacing={2}>
              <Grid item xs={8} style={{ textAlign: "left" }}>
                <Typography variant="h5"> Verify your identity</Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <CloseIcon
                  sx={{ backgroundColor: "lightgray", borderRadius: "50%" }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: "white", marginTop: "22px" }} />
          </Box>
          <Box sx={{ color: "white", marginBottom: "37px" }}>
            <center>
              <Typography>Verify your identity</Typography>
            </center>
          </Box>
          <Box sx={{ color: "white", marginBottom: "47px" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: "12px" }}>
              Before you can mustauthematicate yourself by entering the
              <br />
              code from your mobile authematic ator
            </Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Main;
