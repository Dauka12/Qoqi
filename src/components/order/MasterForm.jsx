import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
// import Step4 from "./Step4";
// import Step5 from "./Step5";

import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the initial input values
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    // alert(`Успешно`);
  };

  // Move to the next step
  _next() {
    let currentStep = this.state.currentStep;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  // Move to the previous step
  _prev() {
    let currentStep = this.state.currentStep;
    this.setState({
      currentStep: currentStep - 1,
    });
  }

  // Render the previous button
  previousButton() {
    if (this.state.currentStep !== 1) {
      return (
        <Button
          style={{
            color: "#F28290",
            background: "white",
            border: "1px solid #F28290",
            height: "5rem",
            borderRadius: "5rem",
            marginLeft: "7rem",
            position: "absolute",
            top: "14rem",
            left: "60rem",
            width:"10rem"
          }}
          onClick={this._prev}
        >
          Назад
        </Button>
      );
    }
    return null;
  }

  // Render the next button
  nextButton() {
    if (this.state.currentStep < 3) {
      return (
        <Button
          onClick={this._next}
          style={{
            color: "white",
            background: "#F28290",
            border: "none",
            height: "5rem",
            borderRadius: "5rem",
            marginLeft: "7rem",
            position: "absolute",
            top: "14rem",
            left: "72rem",
            width:"17rem"
          }}
        >
          Следующий шаг
        </Button>
      );
    }
    return null;
  }

  // Render the submit button
  submitButton() {
    if (this.state.currentStep === 3) {
      return (
        <Button
          style={{
            color: "white",
            background: "#F28290",
            border: "none",
            height: "5rem",
            borderRadius: "5rem",
            marginLeft: "7rem",
            position: "absolute",
            top: "14rem",
            left: "72rem",
            width:"23rem"
          }}
          type="submit"
        >
          Опубликовать вакансию
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Card>
          {/* <CardHeader>Create an Account</CardHeader> */}
          <CardBody>
            <CardTitle>
              <MultiStepProgressBar currentStep={this.state.currentStep} />
            </CardTitle>
            {/* <CardText /> */}
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            ></Step1>
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              username={this.state.username}
            ></Step2>
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
            />

            {this.previousButton()}
            {this.nextButton()}
            {this.submitButton()}
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Form>
    );
  }
}

export default MasterForm;
