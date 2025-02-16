// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount")
    }

    render(){
        // console.log("Parent render")
    
        return (
            <div>
                <h1>About Us</h1>
                <UserClass name={"Arjun"} location={"Virginia"} contact={"@yahoo.com"}/>
            </div>
        )
}
};

export default About ;