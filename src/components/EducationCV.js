import React from "react";

export default class EducationCV extends React.Component {
  render() {
    return (
      <div className="education-content-container">
        <h3>{this.props.schoolName}</h3>
      </div>
    );
  }
}
