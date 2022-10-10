import React from "react";

export default class EducationCV extends React.Component {
  render() {
    return (
      <div className="cv-education-content-container">
        <p>{this.props.schoolName}</p>
      </div>
    );
  }
}
