import {
  Box,
  Divider,
  Grid,
  SwipeableDrawer,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FaEthereum } from "react-icons/fa";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function WithdrawDialog({ showRightModal, toggleDrawer }) {
  const anchor = "right";

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={showRightModal[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <Box
          sx={{
            height: "100vh",
            paddingInline: " 16px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "718px",
          }}
        >
          <Box sx={{ marginBottom: "67px" }} className={"sideModalHeader"}>
            <Grid container spacing={2}>
              <Grid item xs={8} style={{ textAlign: "left" }}>
                <Typography variant="h5"> Withdraw</Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <CloseIcon
                  sx={{ backgroundColor: "lightgray", borderRadius: "50%" }}
                  onClick={toggleDrawer(anchor, false)}
                />
              </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: "white", marginTop: "22px" }} />
          </Box>
          <>
            <Box>
              <Typography variant="h5">Select Withdrawn method</Typography>
              <Typography marginTop={4}>
                Select the amount you want to withdraw into one of your linked
                payment methods. To waithdraw other wallets, please use the
                transfer action.
                <br />
                Transfer is a faster and unlimited,but requires you to manually
                send
                <br />
                money from your bank,which may charges fees
              </Typography>
            </Box>

            <Box
              marginTop={3}
              sx={{
                border: "none",
                borderRadius: "3px",
                innerHeight: "23px",
                padding: "16px",
                border: "1px solid lightgrey",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ fontSize: "14px" }}>WITHDRAW</Typography>
                <Typography style={{ color: "skyblue", fontSize: "14px" }}>
                  you have 1.8 ETH available
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ fontSize: "26px", color: "lightgrey" }}>
                  0.000000000
                </Typography>
                <Button>
                  <FaEthereum style={{ color: "black" }} />
                  ETH
                </Button>
              </Box>
              <Divider width={"100% "} />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "16px",
                }}
              >
                <Typography style={{ fontSize: "14px" }}>TO</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>AUD bank account ending in 5701</Typography>
                <ArrowDropDownIcon />
              </Box>
            </Box>
            <div style={{ flexGrow: 1 }} />
            <Box marginBlock={"16px"}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Button
                    className="btn"
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={4} style={{ textAlign: "right" }}>
                  <Button
                    className="btn"
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    {" "}
                    CONTINUE
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
