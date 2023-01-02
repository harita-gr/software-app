import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h3" paddingTop={10} textAlign="center">
        {" "}
        Ready For Any Team Size
      </Typography>
      <Typography variant="div" padding={4} textAlign="center">
        {" "}
        Optimized For Any Team Size
      </Typography>
      <Box display={"flex"} margin="auto" justifyContent={"center"} padding={5}>
        <Button sx={{ mr: 2 }} variant="contained">
          Try CodeEnv for Free
        </Button>
        <Button sx={{ ml: 2 }} variant="outlined">
          Talk to Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
