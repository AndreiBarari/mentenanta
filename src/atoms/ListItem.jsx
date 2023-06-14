import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const ListObject = props => {
  return (
    <ListItem>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};
