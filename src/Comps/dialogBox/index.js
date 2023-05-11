import react, { useState } from "react";

export default function DialogBox(props) {
  const { showRightModal, setShowRightModal } = props;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log(open);

    setShowRightModal({ ...showRightModal, [anchor]: open });
  };

  return (
    <div>
      <props.data showRightModal={showRightModal} toggleDrawer={toggleDrawer} />
    </div>
  );
}
