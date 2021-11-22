import React, { useState } from "react";

const PracticeStateHooks = () => {
  const [counter, setCounter] = useState(0)

  const counterIncreament = () => {
    setCounter(counter+1)
  };

  return (
    <div>
      {counter}
      <button onClick={counterIncreament}>Increment</button>
    </div>
  );
};

export default PracticeStateHooks;
