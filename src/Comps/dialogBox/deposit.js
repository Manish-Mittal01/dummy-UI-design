import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./dialog.module.css";
import { Dropdown } from "react-bootstrap";

const DepositDialog = ({ showRightModal, toggleDrawer }) => {
  const [depositPage, setDepositPage] = useState(1);
  const anchor = "right";

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
            width: "auto",
            minWidth: "718px",
          }}
        >
          <Box sx={{ marginBottom: "67px" }} className={"sideModalHeader"}>
            <Grid container spacing={2}>
              <Grid item xs={8} style={{ textAlign: "left" }}>
                <Typography variant="h5"> Make a Deposit </Typography>
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
          {depositPage === 1 ? (
            <>
              <Box sx={{ marginBottom: "37px" }}>
                <Typography variant="h5">Select deposit amount</Typography>
              </Box>
              <Box sx={{ marginBottom: "47px" }}>
                <Typography sx={{ fontSize: "15px", fontWeight: "12px" }}>
                  Enter the amount you'd like to deposit into your account
                  balance. To
                  <br />
                  deposit crypto currency , tap "View wallet address" below.
                </Typography>
              </Box>
              <Typography variant="overline">Deposite</Typography>
              <Box marginBottom={4} style={{ marginBottom: 0 }}>
                <Grid spacing={2} className={styles.amountField}>
                  <Grid item xs={8}>
                    <TextField
                      className="inputp"
                      id="standard-basic"
                      style={{
                        width: 600,
                        height: 68,
                        fontWeight: "bolder",
                        fontSize: "33px",
                        fontSmooth: "55px",
                      }}
                      placeholder="$0.00"
                      variant="standard"
                    ></TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      className="btn "
                      sx={{
                        backgroundColor: "whitesmoke",
                        marginTop: "-33px",
                        borderRadius: "50px",
                      }}
                    >
                      <Avatar
                        sx={{
                          height: "25px",
                          width: "25px",
                          marginRight: "8px",
                          borderRadius: "50%",
                        }}
                        alt="Remy Sharp"
                        src="https://www.shutterstock.com/image-vector/vector-image-american-flag-600w-157626554.jpg"
                      />
                      Aud
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Box
                  marginBottom={6}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      border: "2px black",
                      backgroundColor: "whitesmoke",
                      paddingTop: "14px",
                      textAlign: "center",
                      height: "55px",
                      margin: "21px",
                    }}
                  >
                    AUD Bank account endingin 5701 <ArrowDropDownIcon />
                  </Box>

                  <Box marginBottom={4} marginTop={6}>
                    <Grid
                      className={styles.amountField}
                      style={{ alignItems: "center" }}
                      spacing={2}
                    >
                      <Grid item xs={7}>
                        <Typography>i'm depositing crypto</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          sx={{
                            backgroundColor: "lightgray",
                            textDecoration: "none",
                            color: "black",
                          }}
                          onClick={() => setDepositPage(4)}
                        >
                          VIEW WALLET ADDRESS
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                  <div style={{ flexGrow: 1 }}></div>

                  <Box>
                    <Button
                      marginBottom={4}
                      sx={{
                        backgroundColor: "lightgray",
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "86%",
                      }}
                      onClick={() => {
                        setDepositPage(2);
                      }}
                    >
                      CONTINUE
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          ) : depositPage === 2 ? (
            <>
              <Box>
                <Typography variant="h5">Select deposit method</Typography>
                <Typography marginTop={4}>
                  Direct Withdrawal (ACH) is a easier and free-free, while
                  Mannual Wire
                  <br />
                  Transfer is a faster and unlimited,but requires you to
                  manually send
                  <br />
                  money from your bank,which may charges fees
                </Typography>
              </Box>
              <Box
                marginTop={3}
                sx={{
                  boxShadow: "0.5px 0.4px 0px  gray",
                  border: "none",
                  borderRadius: "3px",
                  innerHeight: "23px",
                }}
              >
                <Typography paddingLeft={"16px"} fontSize={21}>
                  Direct Withdrawal
                </Typography>
                <Typography paddingLeft={"16px"} fontSize={16} fontWeight={1}>
                  User ACH to withdrawl from bank (US only)
                </Typography>
              </Box>
              <Box
                marginTop={4}
                sx={{
                  boxShadow: "0.5px 0.4px 0px  gray",
                  border: "none",
                  borderRadius: "3px",
                  innerHeight: "23px",
                }}
              >
                <Typography paddingLeft={"16px"} fontSize={21}>
                  Mannual Wire Transfer
                </Typography>
                <Typography paddingLeft={"16px"} fontSize={16}>
                  {" "}
                  Send a wire through your online banking{" "}
                </Typography>
              </Box>
              <div style={{ flexGrow: 1 }} />
              <Box marginBlock={"16px"}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Button
                      className="btn"
                      sx={{ textDecoration: "none", color: "black" }}
                      onClick={() => setDepositPage(1)}
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
                      onClick={() => setDepositPage(3)}
                    >
                      {" "}
                      CONTINUE
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : depositPage === 3 ? (
            <>
              <Box sx={{ marginBottom: "27px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5"> Mannual Bank Wire </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography>
                  Review the details below and then follow the instructions on
                  the <br />
                  next screen to send a manual bank wire.
                </Typography>
              </Box>
              <Box
                sx={{
                  boxShadow: "0.5px 0.4px 0px  gray",
                  borderRadius: "4px",
                  marginTop: "33px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Typography fontSize={"19px"}>
                      AUD Bank account ending in 5701
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography fontWeight={"10px"}>------5701</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box marginTop={"45px"}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Typography> NOTE FOR YOUR TEAM</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography> OPTIONAL</Typography>
                  </Grid>
                </Grid>
                <TextField
                  className={styles.field}
                  placeholder="Enter  message...."
                  sx={{ borderRadius: "306px", width: "100%" }}
                />
              </Box>
              <Box style={{ marginTop: "24px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography fontSize={"19px"}>Nivasan </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>
                      nivasan.babusrinivasan@marketspaace.com +61481320052{" "}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography fontSize={"19px"}>Babbu</Typography>
                <Typography fontSize={"19px"}> Srinivasan</Typography>
              </Box>
              <Box
                sx={{
                  boxShadow: "0.5px 0.4px 0px  gray",
                  borderRadius: "4px",
                  marginTop: "33px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Typography fontSize={"19px"}>ESTIMATED ARRIVAL</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography fontWeight={"10px"}> WYRE FREE</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography fontSize={"19px"}>Invalid Date</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography fontWeight={"10px"}> 0.00 USD</Typography>
                  </Grid>
                </Grid>
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
                <Typography>
                  <CloseIcon /> Insufficient Privilleges
                </Typography>
              </Box>
              <Box>
                <Typography>
                  {" "}
                  <Checkbox
                    sx={{ borderRadius: "50%" }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  I accept Terms of Use{" "}
                </Typography>
              </Box>
              <Box marginTop={7}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Button
                      className="btn"
                      sx={{ textDecoration: "none", color: "black" }}
                      onClick={() => setDepositPage(2)}
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
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
          ) : (
            <>
              <Box marginTop={2}>
                <Typography variant="h4">Your wallet address </Typography>
              </Box>
              <Box
                sx={{
                  boxShadow: "0.5px 0.4px 2px  gray",
                  alignContent: "center",
                  textAlign: "center",
                  marginTop: "33px",
                  width: "40%",
                  marginInline: "auto",
                }}
              >
                <img
                  src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
                  width="100%"
                ></img>
              </Box>
              <Box marginTop={4}>
                <Typography>CURRENCY</Typography>
                <Dropdown width={"100%"}>
                  <Dropdown.Toggle
                    variant="none"
                    style={{
                      boxShadow: "0.5px 0.4px 2px  gray",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    id="dropdown-basic"
                  >
                    BTC
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: "100%" }}>
                    <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Box>
              <Box marginTop={3}>
                <Typography>WALLET ADDRESS</Typography>
                <Box
                  marginTop={3}
                  sx={{
                    boxShadow: "0.5px 0.4px 2px  gray",
                    height: "55px",
                    textAlign: "",
                    borderRadius: "4px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={11}>
                      <Typography paddingLeft={"16px"}>
                        1rgggyYmcadvdgocP2L1PWPgTHqjCtejN{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>
                        <ContentCopyIcon sx={{ textAlignLast: "right" }} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box marginTop={7}>
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
          )}
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default DepositDialog;
