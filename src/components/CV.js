import React from "react";
import "../styles/cv.css";

export default class CV extends React.Component {
  render() {
    return (
      <div className="cv-container">
        <h2>
          {this.props.fName} {this.props.lName}
        </h2>
      </div>
    );
  }
}
