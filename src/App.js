// Import all components here
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import "./styles/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      phoneNum: "",
      email: "",
    };

    this.personalInfoUpdate = this.personalInfoUpdate.bind(this);
  }

  personalInfoUpdate() {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const phoneNum = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;

    this.setState({
      fName,
      lName,
      phoneNum,
      email,
    });

    console.log(fName);
    console.log(lName);
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="main-content">
          <Form personalInfoUpdate={this.personalInfoUpdate} />
          <CV
            fName={this.state.fName}
            lName={this.state.lName}
            phoneNum={this.state.phoneNum}
            email={this.state.email}
          />
        </div>
      </div>
    );
  }
}

export default App;
