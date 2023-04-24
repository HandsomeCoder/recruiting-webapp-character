import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { decrementAttribute, incrementAttribute } from "./attributesSlice";
import { Typography } from "@mui/material";

export default function Attributes() {
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.attributes.data);

  return (
    <List dense sx={{ width: "100%" }}>
      {Object.entries(attributes).map(([key, value]) => {
        return (
          <ListItem
            sx={{ paddingY: "10px" }}
            key={key}
            secondaryAction={
              <>
                <Typography variant="p" sx={{ paddingX: "20px" }}>
                  {value.value}
                </Typography>
                <Button
                  sx={{ marginLeft: "50px" }}
                  variant="contained"
                  color="success"
                  onClick={() => dispatch(incrementAttribute(key))}
                >
                  +
                </Button>
                <Button
                  sx={{ marginLeft: "5px" }}
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(decrementAttribute(key))}
                >
                  -
                </Button>
              </>
            }
          >
            <ListItemText
              id={key}
              primary={value.label}
              secondary={`Modifier ${value.valueModifier}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
