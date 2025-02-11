import { useState } from "react";

function StateExmp1() {
    const [name, setName] = useState("RKU");
    const [age, setAge] = useState(45);
    const [color, setColor] = useState("Red");
    const[bld, setBld] = useState(100);
    const[chk, setChk] = useState(true)

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <p>Name of the candidate is {name}</p>
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <p style={{ backgroundColor: color, height: 50 }}>
                Age of the candidate is: {age}
            </p>
            <br />
            <p>Age of the candidate is: {age}</p>
            <input type="radio" name="C1" onChange={() => {setColor("Blue");setName("Green");setBld(700) ;}}/> 
            <input type="radio" name="C1" onChange={() => {setColor("Yellow");setName("Yellow");setBld(300)} }/> 
            <input type="radio" name="C1" onChange={() => {setColor("Green");setName("Green");setBld(600)} }/>
            <p>Selected color: {color}</p>
        </div>
    );
}

export default StateExmp1;
