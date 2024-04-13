import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div style={{ position: "absolute", top: "9.5rem", marginLeft: "10rem" }}>
      <h2 style={{ color: "#12141799" }}>Шаг 2</h2>
      <h2>Опишите вашу задачу </h2>

      <FormGroup>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label for="name" style={{ background: "none" }}>
            Название задачи
          </Label>
          <Input
            style={{ borderRadius: "5rem", width: "100%" }}
            type="text"
            name="name"
            id="name"
            placeholder="Пример: Редизайн сайта"
            value={props.name} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label for="address" style={{ background: "none" }}>
            Где находится ваш офис?
          </Label>
          <div style={{ display: "flex" }}>
            <Input
              style={{ borderRadius: "5rem" }}
              type="text"
              name="address"
              id="address"
              placeholder="Местонахождение"
              value={props.address} // Prop: The username input data
              onChange={props.handleChange} // Prop: Puts data into the state
            />

            <Button
              style={{
                color: "#F28290",
                background: "white",
                border: "1px solid #F28290",
                height: "5rem",
                borderRadius: "5rem",
                marginLeft: "2rem",
              }}
            >
              Удаленная вакансия
            </Button>
          </div>
          <Label for="criteria" style={{ background: "none" }}>
            Отметьте основные критерии для вашей вакансии
          </Label>
          <FontAwesomeIcon icon={faSearch} style ={{position:"absolute", bottom:"1rem", left:"2rem"}} />
          <Input
            style={{ borderRadius: "5rem" }}
            type="text"
            name="criteria"
            id="criteria"
            placeholder="Находите и отмечайте до 4 описаний"
            value={props.criteria} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          >
         
          </Input>
        </div>
      </FormGroup>
    </div>
  );
};

export default Step2;
