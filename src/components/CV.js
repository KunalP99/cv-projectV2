import React from "react";
import EducationCV from "./EducationCV";
import "../styles/cv.css";

export default class CV extends React.Component {
  render() {
    return (
      <div className="cv-container">
        <div className="cv-header">
          <h2>
            {this.props.fName} {this.props.lName}
          </h2>
          <p>{this.props.email}</p>
          <p>{this.props.phoneNum}</p>
        </div>
        <div className="cv-education">
          {/* Need CV containers to go here. So a list of containers, with definite values,  */}
          {this.props.arrEducation.map((container) => {
            return container;
          })}
          <EducationCV schoolName={this.props.schoolName} />
        </div>
      </div>
    );
  }
}
