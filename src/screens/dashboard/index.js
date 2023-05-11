import react, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FaExchangeAlt } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DialogBox from "../../Comps/dialogBox";
import { sidebarKeys } from "../../common/contants";
import { tab } from "../../common/ModalData";
import { useNavigate } from "react-router-dom";
// import MainLogo from "../../icons/wyre_logo.svg";

export default function Dashboard() {
  const [showRightModal, setShowRightModal] = useState({
    right: false,
    label: "",
  });
  const anchor = "right";
  const navigate = useNavigate();

  console.log(showRightModal);

  const list = () => (
    <Box
      sx={{ width: "auto", minWidth: 300, zIndex: 9, color: "#cdc8c8" }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, true)}
      //   onKeyDown={toggleDrawer(anchor, true)}
    >
      <div className="sidenav">
        <img
          width={130}
          height={50}
          style={{ color: "#fff", marginTop: "16px" }}
          src="logo4.jpg"
        />
        <AccountCircleIcon />
      </div>
      <Box style={{ paddingLeft: 16 }}>
        <Typography
          className="actionBtn"
          variant={"h6"}
          style={{ marginTop: 60, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Dashboard
        </Typography>
        <Typography
          className="actionBtn"
          variant={"h6"}
          style={{ marginBlock: "15px 60px", cursor: "pointer" }}
          onClick={() => navigate("/activity")}
        >
          Activity
        </Typography>
        <Typography style={{ fontSize: "12px" }}>TOOLS</Typography>
        <Typography
          className="actionBtn"
          variant={"h6"}
          style={{ marginBlock: "6px 35px" }}
        >
          Developers
        </Typography>
        <Typography style={{ fontSize: "12px" }}>ACTIONS</Typography>
      </Box>
      <List>
        {[
          {
            icon: <AddIcon />,
            text: sidebarKeys.deposit,
          },
          {
            icon: <RemoveIcon />,
            text: sidebarKeys.withdraw,
          },
          {
            icon: <FaExchangeAlt />,
            text: sidebarKeys.transfer,
          },
          {
            icon: <BsCurrencyExchange />,
            text: sidebarKeys.exchange,
          },
          {
            icon: <ChatBubbleIcon />,
            text: sidebarKeys.support,
          },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                setShowRightModal({ right: true, label: item.text });
              }}
              style={{ paddingBlock: "4px" }}
            >
              <ListItemIcon
                className={
                  [2, 3, 4].includes(index)
                    ? `dashboardIcon reactIcons`
                    : `dashboardIcon`
                }
                style={{ minWidth: "40px" }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                style={{ fontSize: "0.9rem", fontWeight: 500 }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="sidebarMain">{list()}</div>

      {showRightModal.right &&
        tab.map(
          (item) =>
            showRightModal.label === item.label && (
              <DialogBox
                data={item.content}
                showRightModal={showRightModal}
                setShowRightModal={setShowRightModal}
              />
            )
        )}
    </>
  );
}
