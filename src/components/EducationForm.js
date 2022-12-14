import React from "react";
import "../styles/educationForm.css";

// We want to generate a form each time
export default class EducationForm extends React.Component {
  render() {
    return (
      <div className="education-form">
        <input
          type="text"
          className="school-name"
          name="school-name"
          placeholder="School Name"
        />
        <input
          type="text"
          className="title-study"
          name="title-study"
          placeholder="Title of Study"
        />
        <div className="study-dates-container">
          <div>
            <label>From: </label>
            <input
              type="date"
              className="study-date-from"
              name="study-date-from"
            />
          </div>
          <div>
            <label>To: </label>
            <input type="date" className="study-date-to" name="study-date-to" />
          </div>
        </div>
        <button
          onClick={this.props.educationInfoUpdate}
          type="button"
          className="education-add-btn green-btn"
        >
          Add
        </button>
      </div>
    );
  }
}
