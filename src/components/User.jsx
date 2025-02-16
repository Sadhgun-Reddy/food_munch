import { useState } from "react";

/* eslint-disable react/prop-types */
const User = (props)=>{
    const{name, location, contact} = props
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="">
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
        </div>
    )
}

export default User;