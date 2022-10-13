import React from "react";
import WorkForm from "./WorkForm";

export default class Work extends React.Component {
  render() {
    return (
      <div className="work-information">
        <h2>Work Experience</h2>
        <WorkForm workInfoUpdate={this.props.workInfoUpdate} />
      </div>
    );
  }
}
