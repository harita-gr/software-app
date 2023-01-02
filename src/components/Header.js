import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import HeaderMobile from "./HeaderMobile";

const links = ["Products", "Solution", "Pricing", "Enterprise"];
const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, position: "sticky" }}>
      {isMatch ? (
        <Box display={"flex"}>
          <ApiIcon sx={{ color: "black", padding: 1 }} />
          <Typography
            variant="h6"
            fontFamily={"fantasy"}
            sx={{ color: "black", padding: 0.5 }}
          >
            CodeEnv
          </Typography>
          <HeaderMobile links={links} />
        </Box>
      ) : (
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
      )}

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
            fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
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
          <Button endIcon={<EmailIcon />} sx={{ mr: 3 }} variant="outlined">
            Sign Up
          </Button>
          <Button
            endIcon={<GoogleIcon />}
            sx={{ ml: 3 }}
            variant="contained"
            color="error"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
