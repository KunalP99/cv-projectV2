// Import all components here
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
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
        arr: [],
        id: uniqid(),
        schoolName: "",
        titleStudy: "",
        dateStudy: "",
      },
    };

    this.personalInfoUpdate = this.personalInfoUpdate.bind(this);
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

  educationInfoUpdate(e) {}

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="main-content">
          <Form personalInfoUpdate={this.personalInfoUpdate} />
          <CV
            fName={this.state.personal.fName}
            lName={this.state.personal.lName}
            phoneNum={this.state.personal.phoneNum}
            email={this.state.personal.email}
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
