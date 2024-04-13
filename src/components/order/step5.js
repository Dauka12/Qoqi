import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step5 = props => {
  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <>
      <p>Step5</p>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={props.password} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step5;
