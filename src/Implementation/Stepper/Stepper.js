import React, { useState } from "react";
import { stepperData } from "./stepperData";

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const progressWidth = (100 / (stepperData.length - 1)) * currentStep;

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== stepperData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <div className="relative z-[1] m-2">
        <div className="flex justify-between items-center">
          {stepperData?.map((steps, index) => (
            <div
              style={{ background: `${currentStep >= index ? "skyblue" : ""}` }}
              className="w-[30px] cursor-pointer h-[30px] flex justify-center items-center border rounded-[50%] bg-gray-100"
              key={steps.id}
              onClick={() => setCurrentStep(steps.step)}
            >
              {steps.step + 1}
            </div>
          ))}
        </div>
        <div
          style={{ width: `${progressWidth}%` }}
          className="absolute h-1 top-[50%] left-0 bg-black z-[-1]"
        ></div>
      </div>
      <div className="text-center">{React.cloneElement(stepperData[currentStep].component,{onNext,onPrev}) }</div>
    </div>
  );
}
