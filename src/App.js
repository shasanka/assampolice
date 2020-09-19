import React, { Component } from "react";
// import "./App.css";
import {
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import ImageCarousel from "./components/ImageCarousel";
import SubmissionForm from "./components/SubmissionForm";
import Header from "./components/Header";
import RulesSection from "./components/RulesSection";
import AboutAssamPolice from "./components/AboutAssamPolice";
import poster from "./assets/images/poster.jpeg"

class App extends Component {
  constructor(props) {
    super();
    this.scrollToDiv = React.createRef();
    this.state = {
      lang: 'en',
      open: false
    };

    this.ref_submission = React.createRef();
    this.ref_rules = React.createRef();
  }

  updateLang = (lang) => {
    this.setState({ lang })
  }

  render() {
    const { lang } = this.state;

    return (
      <div>
        <Header updateLang={this.updateLang} />
        <Grid container spacing={2} style={{ paddingTop: 60, paddingLeft: 50, paddingRight: 50 }}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={1}>
              <Grid item xs={12} >
                <AboutAssamPolice lang={lang} />
              </Grid>
              <Grid item xs={12} lg={2} >
                <Button color="primary" variant="outlined" fullWidth style={{ marginTop: 50 }} onClick={() => window.scrollTo(0, this.ref_rules.offsetTop)}>
                  Rules
            </Button>
              </Grid>
              <Grid item xs={12} lg={2} >
                <Button color="primary" variant="contained" fullWidth style={{ marginTop: 50 }} onClick={() => window.scrollTo(0, this.ref_submission.offsetTop)}>
                  Apply
            </Button>
              </Grid>
              <Grid item xs={12} style={{ marginTop: 30, color: '#757575' }}>
                <Typography >
                  Last Date of Submission <br /><span style={{ fontWeight: 'bold', fontSize: 18 }}>5:00 PM on 26th Sept. 2020</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ImageCarousel />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 100 }}>
          <Divider />
        </Grid>
        <Grid item xs={12} >
          <Grid container justify='center'>
            <Grid item xs={12} lg={6}>
              <img src={poster} style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: "80%",
                padding: 5,
                objectFit: 'contain',
                textAlign: "center",
              }} alt="Poster" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 100 }}>
          <Divider />
        </Grid>
        <Grid item container xs={12} ref={ref => this.ref_rules = ref}>
          <RulesSection ref={(ref) => (this.scrollToDiv = ref)} lang={lang} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 50, marginBottom: 50 }}>
          <Divider />
        </Grid>
        <Grid item xs={12} ref={ref => this.ref_submission = ref}>
          <Grid container spacing={1} justify='center' style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 50 }}>
            <Grid item xs={12}>
              <Typography style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Entry Submission</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <SubmissionForm />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid item xs={12} style={{ backgroundColor: '#455a64', padding: 10 }}>
              <Typography style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>© 2020 Assam Police. Designed by Nordic Overseas Solutions LLP</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <Dialog onClose={() => this.setState({ open: false })} open={this.state.open}>
          <Typography style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Entry Submission</Typography>
          <DialogContent >
            <SubmissionForm />
          </DialogContent>
        </Dialog> */}
      </div >
    );
  }
}

export default App;
