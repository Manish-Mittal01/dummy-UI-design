import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Home = () => {
  return (
    <>
      <Container
        sx={{ alignContent: "center", marginLeft: "324px", paddingLeft: "0px" }}
      >
        <Box marginBottom={4}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Typography variant="h4">Hello, Nivasan!</Typography>
            </Grid>
            <Grid item xs={1.2}>
              <Button sx={{ backgroundColor: "whitesmoke", color: "black" }}>
                WITHDRAW
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="outlined"
                sx={{ backgroundColor: "black", color: "white" }}
              >
                {" "}
                DEPOSIT
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box marginBottom={2}>
          <Typography variant="h5">Account Balance</Typography>
        </Box>
        <Box marginBottom={3}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              {/* <Item>xs=8</Item>
               */}
              <Typography>Currency</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>TOTAL ACCOUNTS</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <List
            sx={{ alignContent: "center" }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItem button>
              <ListItemText>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <Avatar sx={{ bgcolor: "green" }}> ₮</Avatar>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>Tether </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    USDT
                  </Grid>
                  <Grid item xs={1}>
                    $199
                  </Grid>
                  <Grid item xs={2}>
                    2.000000 USDT
                  </Grid>
                </Grid>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <Avatar sx={{ bgcolor: "red" }}>¥</Avatar>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>Chinesen </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    CNY
                  </Grid>
                  <Grid item xs={1}>
                    $102
                  </Grid>
                  <Grid item xs={2}>
                    6.95 CNY
                  </Grid>
                </Grid>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <Avatar sx={{ bgcolor: "blue" }}>($)</Avatar>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>USD Coin </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    USDC
                  </Grid>
                  <Grid item xs={1}>
                    $0.58
                  </Grid>
                  <Grid item xs={2}>
                    0.575624 USDC
                  </Grid>
                </Grid>
              </ListItemText>
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography>
                Show all <SouthOutlinedIcon />{" "}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>
                View all Account Transactions <TrendingFlatOutlinedIcon />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
