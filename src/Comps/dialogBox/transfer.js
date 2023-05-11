import { SwipeableDrawer } from "@mui/material";
import React from "react";

export default function TransferDialog({ showRightModal, toggleDrawer }) {
  const anchor = "right";

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={showRightModal[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      <div>Exchange</div>
    </SwipeableDrawer>
  );
}
