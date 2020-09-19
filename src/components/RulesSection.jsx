import React, { Component } from "react";
import {
  Grid,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Dialog,
  DialogContent,
  IconButton
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';

import { termsAndConditions, yoga_tc } from "../utils/rules";
import { prize } from "../utils/prize";
import PDF from 'react-pdf-js-infinite';

import assamese_rules_pdf from "../assets/Assam Police Day Online competition.pdf"

class RulesSection extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <Grid container spacing={4} style={{ paddingTop: 20, paddingLeft: 50, paddingRight: 50 }}>
        <Grid item xs={12}>
          <Typography style={{ fontSize: 30, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>RULES</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color='secondary' variant='outlined' onClick={() => this.setState({ open: true })}>
            Assamese
            </Button>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container style={{ color: '#455a64' }}>
            <Grid item xs={12} >
              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>ONLINE ESSAY COMPETITION: </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 20 }}>
              <Typography style={{ fontWeight: 'bold' }}>
                Topic for Essay
              </Typography>
              <Typography >
                Your views on Assam Police in terms of sensitivity and efficiency and your suggestions to improve on the gaps.
            </Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography style={{ marginTop: 20, fontWeight: 'bold', marginBottom: 20 }}>
                Rules and Guidelines for Online Essay Competition
            </Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography >
                Structure of the Essay Competition:
            </Typography>
            </Grid>
            <Grid item xs={12} >
              <List >
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="The Competition is divided into Seniors and Juniors divisions. Junior Division includes all the students from Class VIII to Class X. Senior division includes all the students from Class XI till Graduation Final Year." style={{ textAlign: 'justify' }} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="The Essay can be written in either English or Assamese." />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>Terms and Conditions:</Typography>
            </Grid>
            <Grid item xs={12} >
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
          </Grid>
        </Grid>
        <Grid item lg={1} >
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Grid container style={{ color: '#455a64' }}>
            <Grid item xs={12} >
              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>ONLINE YOGA COMPETITION: </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography >
                Rules and Guidelines for Online Yoga Competition
            </Typography>
            </Grid>
            <Grid item xs={12} >
              <List>
                {yoga_tc.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {index === 2 || index === 3 || index === 4 || index === 5 ? <StarIcon fontSize="small" style={{ marginLeft: 50, marginRight: 10 }} /> : <FiberManualRecordIcon fontSize="small" />}
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ fontSize: 24, textAlign: 'center', marginBottom: 5, fontWeight: 'bold', paddingLeft: 34 }}>Prize</Typography>
        </Grid>
        <Grid item xs={12} style={{ color: '#455a64' }}>
          <Typography style={{ fontSize: 18 }}>
            Assam Police Headquarters will honour each of the winner from
            Senior and Junior divisions with cash prizes as under:
            </Typography>
        </Grid>
        <Grid item xs={12} style={{ color: '#455a64' }}>
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
        <Dialog onClose={() => this.setState({ open: false })} open={this.state.open} fullScreen>
          <Typography style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Assamese Information</Typography>
          <IconButton edge="start" color="inherit" variant='contained' onClick={() => this.setState({ open: false })}>
            <CloseIcon />CLOSE
          </IconButton>
          <DialogContent >
            <PDF file={assamese_rules_pdf} scale={1.3} />
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}

export default RulesSection;
