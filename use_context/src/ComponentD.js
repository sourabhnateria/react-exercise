import React,  {useContext} from "react";
import UserContext from "./App";

const ComponentD =()=>{
    const user = useContext (UserContext);
    return(
        <div>
            <h5>ComponentD</h5>
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age} </p>
        </div>
    );
};

export default ComponentD;