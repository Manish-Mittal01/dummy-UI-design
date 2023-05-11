import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { deepPurple, orange } from "@mui/material/colors";
import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

export const Activity = () => {
  return (
    <div style={{ paddingInline: "32px" }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography variant="h4" style={{ marginBlock: "16px" }}>
              Activity
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              className="btn"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "12px",
                paddingInline: "16px",
              }}
            >
              Export
            </Button>
          </Grid>
        </Grid>
      </Box>
      <table className="table" style={{ overflow: "auto" }}>
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Sent</th>
            <th scope="col">Currency</th>
            <th scope="col">Received</th>
            <th scope="col">Currency</th>
            <th scope="col">Wallet ID</th>
            <th scope="col"> Action</th>
            <th scope="col">owner</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }).map((item, index) => (
            <tr key={index} className={"activityRow"}>
              <td>TF_YWGYPNO8083</td>
              <td
                style={{
                  borderRadius: "4px",
                  width: "18px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "lightgreen",
                    color: "green",
                    border: "none",
                    borderRadius: "6px",
                    lineHeight: "32px",
                  }}
                >
                  COMPLETED
                </button>
              </td>
              <td>Mar18,2023 3:04Pm</td>
              <td>0.00230513</td>
              <td style={{ width: "18px" }}>
                <CurrencyBitcoinIcon className="bitcoinIcon" />
              </td>
              <td>0.00228936</td>
              <td style={{ width: "18px" }}>
                <CurrencyBitcoinIcon className="bitcoinIcon" />
              </td>
              <td>1BY6r8oilNcGP</td>
              <td>OUTGOING </td>
              <td>accountAC_qerw34</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
