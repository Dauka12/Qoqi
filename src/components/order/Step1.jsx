import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Card from "react-bootstrap/Card";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div style={{ position: "absolute", top: "9.5rem", marginLeft: "10rem" }}>
      <h2 style={{ color: "#12141799" }}>Шаг 1</h2>
      <h2>Какой специалист вам нужен? </h2>

      <FormControl
        style={{
          marginLeft: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="photo"
                control={<Radio />}
                label="Фотограф"
                style={{background:"white", border:"1px solid black", width:"28rem", height:"14rem",justifyContent: "center",}}
              />
              <FormControlLabel
                value="video"
                control={<Radio />}
                label="Видеооператор"
                style={{background:"white", border:"1px solid black", width:"28rem", height:"14rem", justifyContent: "center"}}
              />
            </RadioGroup>
          </div>
          <div style={{ display: "flex" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            
            >
              <FormControlLabel
                value="animator"
                control={<Radio />}
                label="Аниматор"
                style={{background:"white", border:"1px solid black", width:"28rem", height:"14rem", justifyContent: "center"}}
              />
              <FormControlLabel
                value="illustrator"
                control={<Radio />}
                label="Иллюстратор"
                style={{background:"white", border:"1px solid black", width:"28rem", height:"14rem",justifyContent: "center"}}
              />
            </RadioGroup>
          </div>
          <div style={{ display: "flex" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="graphic"
                control={<Radio />}
                label="Графический дизайнер"
                style={{background:"white", border:"1px solid black", width:"28rem", height:"14rem",justifyContent: "center"}}
              />
              <FormControlLabel
                value="art"
                control={<Radio />}
                label="3D Художник"
                style={{background:"white", border:"1px solid black", width:"28rem", height:"14rem",justifyContent: "center"}}
              />
            </RadioGroup>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default Step1;
