import React, {useState} from "react";
import UserContext from "./App";
import { ComponentB } from "./ComponentB";

const ComponentA = () => {
    const [user ] = useState ({name : 'john', age:20});
    return (
        <UserContext.Provider value ={user}>
            <div>
                <h2>ComponentA</h2>
                <ComponentB/>
            </div>
        </UserContext.Provider>
    );
};

export default ComponentA;