import React from "react";
import EducationForm from "./EducationForm";
import addCircle from "../images/add-circle.svg";
import "../styles/educationForm.css";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Find out how to add to form
      // read odin project Handle Inputs and Render Lists
      educationForm: [<EducationForm />],
    };

    this.addEducationForm = this.addEducationForm.bind(this);
  }

  addEducationForm() {
    this.setState((prevState) => ({
      educationForm: [...prevState.educationForm, <EducationForm />],
    }));
    console.log("click");
  }

  render() {
    return (
      <div className="education-information">
        <h2>Educational Experience</h2>
        {/* Put education forms here */}
        {/* THIS SHOULD GO OVER EVERY ELEMENT IN THE ARRAY AND DISPLAY IT */}
        {this.state.educationForm.map((form) => {
          return form;
        })}
        <img
          onClick={this.addEducationForm}
          className="education-add-circle"
          src={addCircle}
          alt="Add new education section"
        />
      </div>
    );
  }
}
