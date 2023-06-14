import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AnimatedText } from "../atoms/AnimatedText";

export const Service = props => {
  return (
    <div className={props.className}>
      <ListItem>
        <ListItemText>
          <AnimatedText content={props.title} />
        </ListItemText>
      </ListItem>
      <div>{props.description}</div>
    </div>
  );
};
