import React from "react";

const InterestPage2 = ({ rate, setRate, nextPage }) => {
  return (
    <div>
      <h2>Enter Rate of Interest</h2>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default InterestPage2;