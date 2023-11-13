const Button = ({ onPrev, onNext }) => {
  return (
    <div className="mt-3">
      <button className="mr-10 p-1 rounded-md border bg-blue-400" onClick={onPrev}>Prev</button>
      <button className="mr-10 p-1 rounded-md border bg-blue-400" onClick={onNext}>Next</button>
    </div>
  );
};

const Example1 = ({ onPrev, onNext }) => {
  return (
    <div>
      <div>Stepper1</div>
      <Button onPrev={onPrev} onNext={onNext} />
    </div>
  );
};

const Example2 = ({ onPrev, onNext }) => {
  return (
    <div>
      <div>Stepper2</div>
      <Button onPrev={onPrev} onNext={onNext} />
    </div>
  );
};

const Example3 = ({ onPrev, onNext }) => {
  return (
    <div>
      <div>Stepper3</div>
      <Button onPrev={onPrev} onNext={onNext} />
    </div>
  );
};

const Example4 = ({ onPrev, onNext }) => {
  return (
    <div>
      <div>Stepper4</div>
      <Button onPrev={onPrev} onNext={onNext} />
    </div>
  );
};

export const stepperData = [
  {
    id: 1,
    component: <Example1 />,
    step: 0,
    isEnabled: true,
    canBeSkipped: false,
  },
  {
    id: 2,
    component: <Example2 />,
    step: 1,
    isEnabled: true,
    canBeSkipped: false,
  },
  {
    id: 3,
    component: <Example3 />,
    step: 2,
    isEnabled: true,
    canBeSkipped: false,
  },
  {
    id: 4,
    component: <Example4 />,
    step: 3,
    isEnabled: true,
    canBeSkipped: false,
  },
];
