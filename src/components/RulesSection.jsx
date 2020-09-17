import React, { Component } from "react";
import {
  Grid,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { termsAndConditions } from "../utils/rules";
import { prize } from "../utils/prize";

class RulesSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={1}>
          <Grid item xs={1} md={12} lg={12}>
            <Typography variant="h5">ONLINE ESSAY COMPETITION: </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5">
              Rules and Guidelines for Online Essay Competition
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6">
              Structure of the Essay Competition:
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="The competition is divided into Senior and Junior divisions. Junior division includes all the students from Class VIII to Class X. Senior division includes all the students from Class XI till Graduation.  " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="The Essay can be written in either English or Assamese. " />
              </ListItem>
            </List>
          </Grid>
          {/* TERMS AND CONDITION */}
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6">Terms and Conditions:</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <List>
              {termsAndConditions.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* PRIZE */}
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6">Prize:</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="subtitle1">
              Assam Police Headquarters will honour each of the winner from
              Senior and Junior divisions with cash prizes as under:
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <List>
              {prize.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default RulesSection;
