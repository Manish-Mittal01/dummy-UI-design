import { SwipeableDrawer } from "@mui/material";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

export default function ExchangeDialog({ showRightModal, toggleDrawer }) {
  const anchor = "right";

  return (
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
          width: "30%",
          minWidth: "718px",
        }}
      >
        <Box sx={{ marginBottom: "67px" }} className={"sideModalHeader"}>
          <Grid container spacing={2}>
            <Grid item xs={8} style={{ textAlign: "left" }}>
              <Typography variant="h5"> Exchange</Typography>
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
        <Box marginBottom={4}>
          <Typography variant="h5">Exchange</Typography>
          <Box>
            <Typography marginTop={3}>
              Select the currency & source of founds you 'd like to transfer .
              then
              <br />
              select the currency & destination of the transfer.
            </Typography>
          </Box>
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
            <Typography style={{ fontSize: "14px", color: "lightgrey" }}>
              YOUR SEND
            </Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "30px", color: "grey" }}>
              $0.00
            </Typography>
            <Button
              style={{
                boxShadow: "0px 0px 5px lightgrey",
                borderRadius: "50px",
              }}
            >
              <Avatar
                sx={{
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
                alt="Remy Sharp"
                src="https://www.shutterstock.com/image-vector/vector-image-american-flag-600w-157626554.jpg"
              />
              USD
              <ArrowDropDownIcon style={{ color: "black" }} />
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
            <Typography style={{ fontSize: "14px", color: "lightgrey" }}>
              FROM
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Account balance 0 USD</Typography>
            <ArrowDropDownIcon />
          </Box>
        </Box>

        <Box style={{ marginBlock: "50px" }}>
          <center>
            <ImportExportIcon
              sx={{
                alignContent: "center",
                backgroundColor: "blue",
                borderRadius: "50%",
                color: "white",
                width: "49px",
                height: "48px",
              }}
            />
          </center>
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
            <Typography style={{ fontSize: "14px", color: "lightgrey" }}>
              YOU RECIEVE
            </Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "30px", color: "grey" }}>
              $0.00000000
            </Typography>
            <Button
              style={{
                boxShadow: "0px 0px 5px lightgrey",
                borderRadius: "50px",
              }}
            >
              <CurrencyBitcoinIcon
                sx={{
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  marginRight: "8px",
                  textDecoration: "none ",
                }}
              />
              BTC
              <ArrowDropDownIcon style={{ color: "black" }} />
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
            <Typography style={{ fontSize: "14px", color: "lightgrey" }}>
              FROM
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Account balance 0 USD</Typography>
            <ArrowDropDownIcon />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#FFB6B5",
            borderRadius: "12px",
            color: "red ",
            marginTop: "9px",
            padding: "11px",
          }}
        >
          <Typography className="insufficientBalance">
            <CloseIcon /> Insufficient FUNDS IN ACCOUNT :AC_QCXUEU
          </Typography>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
