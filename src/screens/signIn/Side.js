import {
  Box,
  Button,
  Divider,
  Grid,
  SwipeableDrawer,
  //   TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import styles from "./signin.module.css";
import TextField from "../../Comps/textField";
import { useNavigate } from "react-router-dom";

const Verify = ({ verifyOtp, toggleDrawer }) => {
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
          <Box sx={{ marginBottom: "27px" }}>
            <center>
              <VerifiedUserIcon
                sx={{
                  marginTop: "22px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#338BA8",
                  width: 53,
                  height: 52,
                }}
              />
            </center>
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
          <Box sx={{ color: "white", marginBottom: "0px" }}>
            <Typography style={{ textAlign: "left" }}>CODE</Typography>
            <TextField
              placeholder={"Enter the code frm your  mobile device...."}
              inputStyle={{
                boxShadow:
                  "0 2px 29px 0px rgba(255, 255, 255, 0.4), 0 0px 18px 0 rgba(255, 255, 255, 0.14), 0 3px 5px 0 rgba(255, 255, 255, 0.12)",
                color: "lightgrey",

                marginBlock: "16px",
                backgroundColor: " #585757",
              }}
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              type={"number"}
            />
          </Box>
          <Box sx={{ color: "white", marginBottom: "77px" }}>
            <Typography>
              Note- Your session will remaiun MFA authenticated for 30 seconds.
            </Typography>
          </Box>
          <div style={{ flexGrow: 1 }}></div>

          <Box sx={{ color: "white" }}>
            <Grid container spacing={2}>
              <Grid item xs={8} style={{ textAlign: "left" }}>
                <Button sx={{ color: "white" }}>Dismiss</Button>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Button sx={{ color: "white" }} onClick={() => navigate("/")}>
                  CONFIRM
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Verify;
