import React from "react";
import EducationForm from "./EducationForm";
import "../styles/educationForm.css";

export default class Education extends React.Component {
  render() {
    return (
      <div className="education-information">
        <h2>Educational Experience</h2>
        <EducationForm educationInfoUpdate={this.props.educationInfoUpdate} />
      </div>
    );
  }
}
