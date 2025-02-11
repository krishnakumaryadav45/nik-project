
//create 3 state from with following elements
//page1: Ask user to enter principle amount (10,000)
//page2: Ask user to enter rate of interest (7%)
//page3: Ask user to enter duration (1 years)
//display interest amount on page 4
import * as React from "react";
import { useState } from "react";
import InterestPage1 from "./IntrestField1";
import InterestPage2 from "./IntrestField2";
import InterestPage3 from "./IntrestField3";

const InterestFinder = () => {
  const [page, setPage] = useState(1);
  const [principle, setPrinciple] = useState(10000);
  const [rate, setRate] = useState(7);
  const [duration, setDuration] = useState(1);
  const [interest, setInterest] = useState(0);

  const calculateInterest = () => {
    setInterest((principle * rate * duration) / 100);
  };

  const nextPage = () => {
    if (page === 3) {
      calculateInterest();
    }
    setPage(page + 1);
  };

  return (
    <div>
      {page === 1 && (
        <InterestPage1
          principle={principle}
          setPrinciple={setPrinciple}
          nextPage={nextPage}
        />
      )}
      {page === 2 && (
        <InterestPage2 rate={rate} setRate={setRate} nextPage={nextPage} />
      )}
      {page === 3 && (
        <InterestPage3
          duration={duration}
          setDuration={setDuration}
          nextPage={nextPage}
        />
      )}
      {page === 4 && (
        <div>
          <h2>Interest Amount</h2>
          <p>{interest}</p>
        </div>
      )}
    </div>
  );
};

export default InterestFinder;
