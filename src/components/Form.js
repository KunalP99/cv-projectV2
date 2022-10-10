import React from "react";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import "../styles/form.css";

export default class Form extends React.Component {
  render() {
    return (
      <form id="form">
        <PersonalInformation
          personalInfoUpdate={this.props.personalInfoUpdate}
        />
        <div className="education-container">
          <Education />
        </div>
      </form>
    );
  }
}
