import React, { useState } from "react";
import {
  Drawer,
  ListItemButton,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderMobile = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item) => {
            return (
              <ListItemButton>
                <ListItemText>{item}</ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton sx={{ ml: "auto" }} onClick={() => setOpen(true)}>
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default HeaderMobile;
