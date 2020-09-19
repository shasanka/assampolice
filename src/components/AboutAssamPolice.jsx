import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class AboutAssamPolice extends Component {
  render() {
    // const { lang } = this.props;

    return (
      <div >
        <Grid container spacing={1}>
          <Grid item xs={12} >
            {/* {lang === 'en' && <Typography style={{ fontSize: 32, color: '#0d47a1' }}><span style={{ fontSize: 40, fontWeight: 'bold' }}>70</span><sup style={{ fontSize: 28, fontWeight: 'bold' }}>th</sup> Assam Police Day Celebration</Typography>} */}
            <Typography style={{ fontSize: 32, color: '#0d47a1' }}>Assam Police Day Celebration</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='secondary' style={{ fontSize: 18, textAlign: 'justify' }}>
              Assam Police Day is celebrated every year on 1st of October to mark the occasion on which, the first Indian Officer Sh. K. R. Choudhary, IPS, became the Police Chief of Assam. He took over the responsibility from Mr. J. H. Reid, IP(Britisher) on 1st October 1951.
            </Typography>
            <Typography color='secondary' style={{ fontSize: 18, textAlign: 'justify' }}>
              Over the past, the occasion has been celebrated by holding ceremonial parade, conducting variety of sports, reaching out to the communities, illumination of Police buildings and reiterating the mission and vision of Assam Police. This year the ensuing Assam Police Day will be observed in a befitting manner but at a reduced scale due to COVID conundrums. Assam Police will be organising online competitions with a vision to strengthen our ties with people in general and Student community in particular.
            </Typography>
            <Typography color='secondary' style={{ fontSize: 18, marginTop: 10, textAlign: 'justify', lineHeight: 1.5 }}>
              Assam Police will be conducting two online competitions this year:
              <br /><b>1.	Online Essay Competition</b>
              <br /><b>2.	Online Yoga Competition</b>
            </Typography>
            <Typography color='secondary' style={{ fontSize: 18, marginTop: 10, textAlign: 'justify' }}>
              The countdown has begun !!!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutAssamPolice;
