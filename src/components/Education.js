import React from "react";
import EducationForm from "./EducationForm";
import addCircle from "../images/add-circle.svg";
import "../styles/educationForm.css";

export default class Education extends React.Component {
  render() {
    return (
      <div className="education-information">
        <h2>Educational Experience</h2>
        <EducationForm educationInfoUpdate={this.props.educationInfoUpdate} />
        <img
          onClick={this.addEducationForm}
          className="education-add-circle"
          src={addCircle}
          alt="Add new education section"
        />
      </div>
    );
  }
}
