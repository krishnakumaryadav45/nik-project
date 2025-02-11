import { useState } from "react";
import NewComponent from "./customrequest";

const ShowCompo = ({ var3 }) => (var3 ? <NewComponent /> : null);

function TestComponent() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide User" : "Show User"}
            </button>
            <ShowCompo var3={show} />
        </>
    );
}

export default TestComponent;