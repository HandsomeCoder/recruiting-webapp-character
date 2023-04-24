import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { decrementAttribute, incrementAttribute } from "./attributesSlice";
import { Typography } from "@mui/material";
import { checkForMatch } from "../class/classSlice";

export default function Attributes() {
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.attributes);

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
                  onClick={() => {
                    dispatch(incrementAttribute({ key }));
                    dispatch(
                      checkForMatch(
                        Object.entries(attributes).reduce(
                          (obj, [key, value]) => ({
                            ...obj,
                            [key]: value.value,
                          }),
                          {}
                        )
                      )
                    );
                  }}
                >
                  +
                </Button>
                <Button
                  sx={{ marginLeft: "5px" }}
                  variant="contained"
                  color="error"
                  onClick={() => {
                    dispatch(decrementAttribute({ key }));
                    dispatch(
                      checkForMatch(
                        Object.entries(attributes).reduce(
                          (obj, [key, value]) => ({
                            ...obj,
                            [key]: value.value,
                          }),
                          {}
                        )
                      )
                    );
                  }}
                >
                  -
                </Button>
              </>
            }
          >
            <ListItemText
              id={key}
              primary={value.label}
              secondary={`Modifier ${Math.floor((value.value - 10) / 2)}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
