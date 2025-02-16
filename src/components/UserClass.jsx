
import { Component } from "react";

class UserClass extends Component {
    constructor(props){
        super(props);
        this.state={
            userInfo :{
                name:"dummy",
            }, 
        }
        // console.log("Child Constructor");
    }

    async componentDidMount(){
        // console.log("Child Component Did Mount")
        const data = await fetch("https://api.github.com/users/Thirupathi-702");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });
        console.log(json);
    }

    
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        // console.log("Child render")
        return (
            <div className="">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Virginia</h4>
            </div>
        )
    }
};
export default UserClass;


