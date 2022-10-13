import React from "react";

export default class EducationCV extends React.Component {
  render() {
    return (
      <div className="cv-education-content-container">
        <div className="school-title-container">
          <p className="school-name-text">{this.props.schoolName}</p>
          <p className="title-study-text">{this.props.titleStudy}</p>
        </div>
        <p className="date-study-text">
          {this.props.studyDateFrom}
          <strong>
            {this.props.studyDateFrom ? " - " : console.log("no dates")}
          </strong>
          {this.props.studyDateTo}
        </p>
      </div>
    );
  }
}
