import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { decrementSkill, incrementSkill } from "./skillSlice";

export default function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);
  const attributes = useSelector((state) => state.attributes.data);

  return (
    <List dense sx={{ width: "100%" }}>
      {Object.entries(skills)
        .map(([attr, skills]) =>
          Object.entries(skills).map((itr) => [...itr, attr])
        )
        .reduce((pv, cr) => [...pv, ...cr], [])
        .map(([skill, value, attribute]) => {
          return (
            <ListItem
              sx={{ paddingY: "10px" }}
              key={skill}
              secondaryAction={
                <>
                  <Typography variant="p">{value}</Typography>

                  <Button
                    sx={{ marginLeft: "50px" }}
                    variant="contained"
                    color="success"
                    onClick={() => {
                      dispatch(
                        incrementSkill({
                          attrKey: attribute,
                          attrValue: attributes[attribute.toLowerCase()].valueModifier,
                          skill,
                        })
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
                      dispatch(
                        decrementSkill({
                          attrKey: attribute,
                          attrValue: attributes[attribute.toLowerCase()].valueModifier,
                          skill,
                        })
                      );
                    }}
                  >
                    -
                  </Button>

                  <Typography variant="p" sx={{ paddingX: "20px" }}>
                    {`Total: ${
                      value + attributes[attribute.toLowerCase()].valueModifier
                    }`}
                  </Typography>
                </>
              }
            >
              <ListItemText
                id={skill}
                primary={skill}
                secondary={`Modifier ${attribute}: ${
                  attributes[attribute.toLowerCase()].valueModifier
                }`}
              />
            </ListItem>
          );
        })}
    </List>
  );
}
