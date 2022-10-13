import React from "react";
import EducationCV from "./EducationCV";
import WorkCV from "./WorkCV";
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
          <div>
            <h2>{this.props.schoolName ? "Education" : ""}</h2>
            {/* Maps over array to display container and updates every time an item is added to the array */}
            {this.props.arrEducation.map((container) => {
              return container;
            })}
            <EducationCV
              schoolName={this.props.schoolName}
              titleStudy={this.props.titleStudy}
              dateStudy={this.props.dateStudy}
            />
          </div>
        </div>
        <div className="cv-work">
          <h2>{this.props.companyName ? "Work Experience" : ""}</h2>
          {this.props.arrWork.map((container) => {
            return container;
          })}
          <WorkCV
            companyName={this.props.companyName}
            positionTitle={this.props.positionTitle}
            jobDesc={this.props.jobDesc}
            workDateFrom={this.props.workDateFrom}
            workDateTo={this.props.workDateTo}
          />
        </div>
      </div>
    );
  }
}
