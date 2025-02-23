"use client";

import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <Box display="flex" justifyContent="space-between" padding="10px">
      <Typography variant="h5" role="heading">
        App Name
      </Typography>
    </Box>
  );
}
