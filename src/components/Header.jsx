import React, { Component } from "react";
import "../components/Header.css";
import logo from "../assets/images/assam_police_logo.png"
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: "10px",
    fontSize: 28,
    fontWeight: 'bold'
  },
  logo: {
    width: "60px",
    height: "60px",
    padding: 5,
    paddingLeft: 20
    // objectFit: "contain",
    // paddingLeft: "30px",
  },
  rulesText: {
    paddingRight: "20px",
  },
  logoAndText: {
    paddingLeft: "20px",
  },
});

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar >
            <img src={logo} className={classes.logo} alt="Assam police" />
            <Typography className={classes.title}>
              Assam Police Day 2020
            </Typography>
            {/* <Button style={{ color: 'white' }} onClick={() => updateLang('en')}>
              English
            </Button> */}
            {/* <Button style={{ color: 'white' }} onClick={() => updateLang('as')} >
              Assamese
            </Button> */}
            {/* <div className={classes.rulesText}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={this.goToRules}
              >
                Rules
              </Button>
            </div>

            <Button color="primary" variant="contained">
              Apply
            </Button> */}
          </Toolbar>
        </AppBar>
      </React.Fragment >
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
