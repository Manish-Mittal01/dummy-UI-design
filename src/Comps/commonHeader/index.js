import { Box, Switch, Typography } from "@mui/material";
import React from "react";

const CommonHeader = () => {
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  return (
    <Box marginBottom={3} style={{ marginTop: "16px" }}>
      <Typography>
        Text
        <Switch
          {...label}
          defaultChecked
          className=" bg-white"
          color="default"
        />
        Production
      </Typography>
    </Box>
  );
};

export default CommonHeader;
