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
        <input
          type="text"
          className="date-study"
          name="date-study"
          placeholder="Date of Study"
        />
        <button type="button" className="education-add-btn green-btn">
          Add
        </button>
      </div>
    );
  }
}
