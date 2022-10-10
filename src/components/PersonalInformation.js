import React from "react";
import "../styles/personalInfo.css";

export default class PersonalInformation extends React.Component {
  render() {
    return (
      <div className="personal-information">
        <h2>Personal Information</h2>
        <input type="text" id="fName" name="fName" placeholder="First Name" />
        <input type="text" id="lName" name="lName" placeholder="Last Name" />
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          placeholder="Phone Number"
        />
        <input type="email" id="email" name="email" placeholder="Email" />
        <button
          onClick={this.props.personalInfoUpdate}
          type="button"
          className="green-btn"
          id="personal-add-btn"
        >
          Update
        </button>
      </div>
    );
  }
}
