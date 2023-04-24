import * as React from "react";
import Grid from "@mui/material/Grid";

import Attributes from "../components/attributes/Attributes";
import Clazz from "../components/class/Clazz";

export default function WebappCharacter() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Attributes />
      </Grid>
      <Grid item xs={4}>
        <Clazz />
      </Grid>
      <Grid item xs={4}>
        <Clazz />
      </Grid>
    </Grid>
  );
}
