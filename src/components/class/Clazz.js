import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ListItemText } from "@mui/material";
import { checkForMatch } from "./classSlice";

export default function Clazz() {
  const clazzez = useSelector((state) => state.clazzez);
  const [selectedClazz, setSelectedClazz] = React.useState("");

  const dispatch = useDispatch();
  const attributeSummary = useSelector(
    (state) => state.attributes.metadata.summary
  );

  React.useEffect(() => {
    dispatch(checkForMatch(attributeSummary));
  }, [dispatch, attributeSummary]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={selectedClazz === "" ? 12 : 6}>
        <List dense sx={{ width: "100%" }}>
          {Object.entries(clazzez).map(([key, value]) => {
            return (
              <ListItem sx={{ paddingY: "10px" }} key={key}>
                <Button
                  fullWidth
                  variant={
                    value.match || selectedClazz === key
                      ? "contained"
                      : "outlined"
                  }
                  color={value.match ? "success" : "primary"}
                  onClick={() =>
                    setSelectedClazz((state) => (key === state ? "" : key))
                  }
                >
                  {value.label}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      {selectedClazz !== "" && (
        <Grid item xs={6}>
          <>
            <List dense sx={{ width: "100%", maxWidth: 300 }}>
              {Object.entries(clazzez[selectedClazz].attributes).map(
                ([key, value]) => {
                  return (
                    <ListItem sx={{ paddingY: "10px" }} key={key}>
                      <ListItemText
                        primary={key}
                        secondary={value}
                      ></ListItemText>
                    </ListItem>
                  );
                }
              )}
            </List>
          </>
        </Grid>
      )}
    </Grid>
  );
}
