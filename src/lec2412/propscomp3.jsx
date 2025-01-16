import React from "react";
import MyPropButton from "./propscomp1";
import MypropsList from "./propscomp2";

class PropExam extends React.Component {
    state = {
        var1: true,
        var2: "hello world",
        var4: [1, 2, 3, 4, 5],
    };

    render() {
        const { var1, var2, var4 } = this.state; // Destructuring the state
        return (
            <div>
                <MyPropButton xyz={var1} abc={var2} />
                <MypropsList items={var4} />
            </div>
        );
    }
}

export default PropExam;
