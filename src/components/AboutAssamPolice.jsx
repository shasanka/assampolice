import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class AboutAssamPolice extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={12}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6">
              Assam Police will be celebrating its 70th Assam Police Day on 1st
              October 2020. The history of Assam Police is a saga of indomitable
              courage, devotion, and supreme sacrifice in the line of their
              duties and towards the service of their citizens. On this day, we
              solicit the participation of our respected citizens to be a part
              of this celebration and encourage and motivate us further to do
              even better. In wake of the COVID-19 pandemic and the guidelines
              thereof, Assam Police will conduct online competitions to connect
              with its people on 70th Assam Police Day.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutAssamPolice;
