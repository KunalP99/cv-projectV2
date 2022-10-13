import React from "react";
import "../styles/workForm.css";

export default class WorkForm extends React.Component {
  render() {
    return (
      <div className="work-form">
        <input
          type="text"
          className="company-name"
          name="company-name"
          placeholder="Company Name"
        />
        <input
          type="text"
          className="position-title"
          name="position-title"
          placeholder="Position Title"
        />
        <input
          type="text"
          className="job-desc"
          name="job-desc"
          placeholder="Job Description"
        />
        <div className="work-dates-container">
          <div>
            <label>From: </label>
            <input
              type="date"
              className="work-date-from"
              name="work-date-from"
            />
          </div>
          <div>
            <label>To: </label>
            <input type="date" className="work-date-to" name="work-date-to" />
          </div>
        </div>
        <button
          onClick={this.props.workInfoUpdate}
          type="button"
          className="work-add-btn green-btn"
        >
          Add
        </button>
      </div>
    );
  }
}
