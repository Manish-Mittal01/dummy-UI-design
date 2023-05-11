import { Box, Switch, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  return (
    <Box marginBottom={3}>
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

export default Header;
