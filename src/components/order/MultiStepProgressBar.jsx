import React from "react";
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = (props) => {
  const stepPercentage = (props.currentStep) * 33;

  return (
    <div className="verticalProgressBar">
      <div className="progressContainer">
        <div className="progressBar" style={{ height: `${stepPercentage}%` }} />
      </div>
      <div className="stepLabels">
        {[1, 2, 3].map((step, index) => (
          <div key={index} className={`stepLabel ${props.currentStep >= step ? "accomplished" : ""}`}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiStepProgressBar;
