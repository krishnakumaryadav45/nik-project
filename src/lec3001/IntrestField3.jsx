import React from "react";

const InterestPage3 = ({ duration, setDuration, nextPage }) => {
  return (
    <div>
      <h2>Enter Duration (in years)</h2>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default InterestPage3;