import React from "react";

const InterestPage1 = ({ principle, setPrinciple, nextPage }) => {
  return (
    <div>
      <h2>Enter Principle Amount</h2>
      <input
        type="number"
        value={principle}
        onChange={(e) => setPrinciple(e.target.value)}
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default InterestPage1;