import * as React from "react";
function featchUser() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({id: 1, name: "John Smith"});
            }, 2000);
    });
}
function ApiSimulation(){
    const [user, setUser] = React.useState("loading");
    const [id,setId] = React.useState("loading");
    React.useEffect(() => {
        featchUser()
       .then(user => {
        setUser(user.name);
        setId(user.id);
       });
    });
    return (
        <div>
            User:{user}, <br />
            ID: {id}
        </div>
    );
}
export default ApiSimulation;