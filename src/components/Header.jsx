import React, { Component } from "react";
import "../components/Header.css";
import logo from "../assets/images/logo.jpeg";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  },
  logo: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    paddingLeft: "30px",
  },
  rulesText: {
    paddingRight: "20px",
  },
  logoAndText: {
    paddingLeft: "20px",
  },
});

class Header extends Component {
  goToRules = () => {
    this.props.goToRulesSection();
    console.log("here");
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <img src={logo} className={classes.logo} alt="Assam police" />
            <Typography variant="h6" className={classes.title}>
              Assam Police
            </Typography>
            <div className={classes.rulesText}>
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
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
