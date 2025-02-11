    import { useState,useEffect } from "react";
import { Promise } from "bluebird";
Promise.config({cancellation:true});
function featchUser() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({id: 1, name: "John Smith"});
            }, 5000);
    });
}
function NewComponent(){
    const[id,setId] =useState("loading...");
    const[name, setName] = useState("loading...");
    useEffect(() => {
        const promise =featchUser.then((var1)=>{
            setId(var1.id);
            setName(var1.name);
        });
        return () => {
            promise.cancel();
        };
});
return(
    <div>
        User Id:{id},<br />
        Name:{name}
    </div>
)
}
 export default NewComponent;