import React from "react";
import PersonalInformation from "./PersonalInformation";
import "../styles/form.css";

export default class Form extends React.Component {
  render() {
    return (
      <form id="form">
        <PersonalInformation
          personalInfoUpdate={this.props.personalInfoUpdate}
        />
      </form>
    );
  }
}
