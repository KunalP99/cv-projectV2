import React from "react";
import Delete from "../images/delete.svg";

export default class WorkCV extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(e) {
    e.target.parentNode.parentNode.remove();
  }

  render() {
    return (
      <div className="cv-work-content-container">
        <div className="work-title-container">
          <p className="company-name-text">{this.props.companyName}</p>
          <p className="position-title-text">{this.props.positionTitle}</p>
          <p className="job-desc-text">{this.props.jobDesc}</p>
        </div>
        <p>
          {this.props.workDateFrom}
          <strong>
            {this.props.workDateFrom ? " - " : console.log("no dates")}
          </strong>
          {this.props.workDateTo}
        </p>
      </div>
    );
  }
}
