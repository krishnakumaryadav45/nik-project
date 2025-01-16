import * as React from "react";
class Component extends React.Component {
    render() {
        return (
            <div>
                <h1>Component 1</h1>
                <h2>Component 2</h2>
                <h3>component 3</h3>
                <Abc/>
            </div>
        );
    }
}
class Abc extends React.Component {
    render() {
        return (
            <div>
                <h1>Component 1</h1>
                <h2>Component 2</h2>
                <h3>component 3</h3>
                <Xyz/>
            </div>
        );
    }
}
class Xyz extends React.Component {
    render() {
        return (
            <div>
                <h1>Component 1</h1>
                <h2>Component 2</h2>
                <h3>component 3</h3>
            </div>
        );
    }
}
export default Component;