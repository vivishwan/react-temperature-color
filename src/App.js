import React, { useState } from 'react';

const App = () => {
  //useState for the temperature value
  const [temp, setTemp] = useState(10);
  //useState for the temperature color
  const [tempColor, setTempColor] = useState('cold');

  const increaseTemp = () => {
    if (temp === 30) return;
    const tempValue = temp + 1;
    if (tempValue >= 15) {
      setTempColor('hot');
    }
    setTemp(tempValue);
  };
  const decreaseTemp = () => {
    if (temp === 10) return;
    const tempValue = temp - 1;
    if (tempValue < 15) {
      setTempColor('cold');
    }
    setTemp(tempValue);
  };

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}>{temp} C</div>
      </div>
      <div className='button-container'>
        <button
          onClick={() => {
            increaseTemp();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decreaseTemp();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
