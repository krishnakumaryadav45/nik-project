import * as React from "react";
import ReactDOM from "react-dom/client"; // Ensure proper case for ReactDOM
//import UserContextExample from "./lec3001/use_con_exmp3";
// import IntrestFinder from "./lec3001/IntrestField4";
  // import TestComponent from "./lec1601/customcomp3";
  import InterestFinder from "./lec3001/IntrestField4";
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Correct usage of `createRoot`
    root.render(
        <div>
           {
            <InterestFinder/>
                  
            }
        </div>
    );
} else {
  //  console.error("Root element not found");//
}