// Import all components here
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import EducationCV from "./components/EducationCV";
import "./styles/app.css";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        fName: "",
        lName: "",
        phoneNum: "",
        email: "",
      },
      education: {
        schoolName: "",
        titleStudy: "",
        dateStudy: "",
      },
      arrEducation: [],
    };

    this.personalInfoUpdate = this.personalInfoUpdate.bind(this);
    this.educationInfoUpdate = this.educationInfoUpdate.bind(this);
  }

  personalInfoUpdate() {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const phoneNum = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;

    this.setState({
      personal: {
        fName,
        lName,
        phoneNum,
        email,
      },
    });
  }

  educationInfoUpdate(e) {
    let schoolName = document.querySelector(".school-name").value;
    let titleStudy = document.querySelector(".title-study").value;
    let dateStudy = document.querySelector(".date-study").value;

    this.setState((prevState) => ({
      education: {
        schoolName,
        titleStudy,
        dateStudy,
      },
      // Copies the previous state of the array and adds on the new item after it
      arrEducation: [
        ...prevState.arrEducation,
        <EducationCV
          schoolName={this.state.education.schoolName}
          titleStudy={this.state.education.titleStudy}
          dateStudy={this.state.education.dateStudy}
        />,
      ],
    }));
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="main-content">
          <Form
            personalInfoUpdate={this.personalInfoUpdate}
            educationInfoUpdate={this.educationInfoUpdate}
          />
          {/* All these values are passed to the CV component to be displayed on screen */}
          <CV
            fName={this.state.personal.fName}
            lName={this.state.personal.lName}
            phoneNum={this.state.personal.phoneNum}
            email={this.state.personal.email}
            arrEducation={this.state.arrEducation}
            schoolName={this.state.education.schoolName}
            titleStudy={this.state.education.titleStudy}
            dateStudy={this.state.education.dateStudy}
          />
        </div>
      </div>
    );
  }
}

export default App;
