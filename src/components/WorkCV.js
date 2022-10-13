import React from "react";

export default class WorkCV extends React.Component {
  render() {
    return (
      <div className="cv-work-content-container">
        <div className="work-title-container">
          <p className="company-name-text">{this.props.companyName}</p>
          <p className="position-title-text">{this.props.positionTitle}</p>
        </div>
        <p>
          {this.props.workDateFrom}
          {this.props.workDateFrom ? "-" : console.log("no dates")}
          {this.props.workDateTo}
        </p>
      </div>
    );
  }
}
