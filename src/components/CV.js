import React from "react";
import EducationCV from "./EducationCV";
import "../styles/cv.css";

export default class CV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationCV: [<EducationCV schoolName={this.props.schoolName} />],
    };
  }
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
        <div className="cv-education">{this.state.educationCV}</div>
      </div>
    );
  }
}
