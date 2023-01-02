import React from "react";
import { Box } from "@mui/material";
import ContentItem from "./ContentItem";

const contentArray = [
  {
    title: "Get Things Done",
    description:
      "Lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node",
    img: "/1.jpg",
  },
  {
    title: "Productivity is Brilliant",
    description:
      "Lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node",
    img: "/2.jpg",
  },
  {
    title: "Fast Development",
    description:
      "Lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node",
    img: "/3.jpg",
  },
];

const Content = () => {
  return (
    <Box
      bgcolor={"#fbf2f2"}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      width="100%"
      height="100%"
    >
      {contentArray.map((content, index) => (
        <ContentItem
          key={index}
          title={content.title}
          description={content.description}
          img={content.img}
          swap={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Content;
