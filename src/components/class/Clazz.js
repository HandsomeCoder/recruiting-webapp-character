import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export default function Clazz() {
  const clazzez = useSelector((state) => state.clazzez);

  return (
    <List dense sx={{ width: "100%", maxWidth: 300 }}>
      {Object.entries(clazzez).map(([key, value]) => {
        return (
          <ListItem sx={{ paddingY: "10px" }} key={key}>
            <Typography
              sx={{
                fontWeight: value.match ? "bold" : "normal",
                color: value.match ? "green" : "black",
              }}
            >
              {value.label}
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
}
