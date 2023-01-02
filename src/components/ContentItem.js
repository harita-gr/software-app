import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ContentItem = ({ title, description, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection={isMatch ? "column" : "row"}
      padding={10}
      justifyContent="space-between"
      alignItems="center"
      bgcolor={!swap && "#fff"}
    >
      {swap ? (
        <>
          <Box>
            <Typography
              color="#734950"
              padding={3}
              variant="h3"
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
            >
              {title}
            </Typography>
            <Typography
              padding={3}
              variant="caption"
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
            >
              {description}
            </Typography>
          </Box>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: "10%",
              borderRadius: 20,
              height: "300px",
            }}
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: "10%",
              borderRadius: 20,
              height: "300px",
            }}
          />
          <Box>
            <Typography
              color="#734950"
              padding={3}
              variant="h3"
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
            >
              {title}
            </Typography>
            <Typography
              padding={3}
              variant="caption"
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
            >
              {description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
