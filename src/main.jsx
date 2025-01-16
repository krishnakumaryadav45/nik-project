import * as React from "react";
import ReactDOM from "react-dom/client"; // Ensure proper case for ReactDOM
 // import PropExam from "./lec2412/propscomp3"; // Import the PropExam component
import DefaultProps from "./lec2412/defaultprops";
// Select the root DOM element
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Correct usage of `createRoot`
    root.render(
        <div>
            <DefaultProps />
            <br />
            <DefaultProps var1={true} />
            <br />
            <DefaultProps var2={"yellow"} />
            <br />
            <DefaultProps var3={"New Text"} />
            <br />
            <DefaultProps var1={true} var2={"red"} />
            <br />
            <DefaultProps var1={true} var2={"blue"} var3={"abc"}/>
        </div>
    );
} else {
    console.error("Root element not found");
}
