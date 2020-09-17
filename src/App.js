import React, { Component } from "react";
import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import SubmissionForm from "./components/SubmissionForm";
import Header from "./components/Header";
import { TransferWithinAStationSharp } from "@material-ui/icons";
import gsap from "gsap";
import RulesSection from "./components/RulesSection";
import AboutAssamPolice from "./components/AboutAssamPolice";

// const scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop);

class App extends Component {
  constructor(props) {
    super();
    this.scrollToDiv = React.createRef();
    this.state = {
      toRulesSection: false,
    };
  }

  scrollToMyRef = () => window.scrollTo(0, this.scrollToDiv.offsetTop);

  goToRulesSection = () => {
    console.log(this.scrollToDiv.current);

    this.scrollToMyRef();
  };

  render() {
    return (
      <div className="App">
        {/* FOR LOGO */}
        <Header goToRulesSection={this.goToRulesSection} />
        {/* IMAGE CAROUSEL */}
        <ImageCarousel />
        {/* ABOUT ASSAM POLICE */}
        <AboutAssamPolice />

        {/* RULES SECTION */}
        <RulesSection ref={(ref) => (this.scrollToDiv = ref)} />
        {/* SUBMISSION FORM */}
        <SubmissionForm />
        <div ref={(ref) => (this.scrollToDiv = ref)}>hello some id</div>
      </div>
    );
  }
}

export default App;
