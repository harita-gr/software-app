import React from "react";
import { AppBar, Toolbar, Box, Tabs, Tab, Button, Link, Typography } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";

const links = ["Products", "Solution", "Pricing", "Enterprise"];
const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, position: "sticky" }}>
      <Toolbar>
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          {/* Logo */}
          <ApiIcon sx={{ color: "black" }} />

          {/* Links */}
          <Box>
            <Tabs sx={{ textDecoration: "none" }} component={Link}>
              {links.map((link, index) => (
                <Tab
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "5px",
                    },
                  }}
                  key={index}
                  label={link}
                />
              ))}
            </Tabs>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <Button sx={{ mr: 2 }} variant="outlined">
              Talk to Us
            </Button>
            <Button sx={{ mr: 2 }} variant="contained">
              Try for Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Box width="100%" height="100vh">
        <video
          width={"100%"}
          height={"70%"}
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <Box display="flex" width="100%">
          <Typography
            margin="auto"
            variant="h4"
            color="black"
            textAlign={"center"}
          >
            Build your Softwares Hassle Free and Build Top Notch Quality
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
        >
          <Button sx={{ mr: 3 }} variant="outlined">
            Sign Up with Email
          </Button>
          <Button sx={{ ml: 3 }} variant="contained">
            Sign Up with Google
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
