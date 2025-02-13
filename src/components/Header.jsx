import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"; 
const Header = ()=>{
  const [loginBtn,setLoginBtn]=useState("Login")
    return(
      <div className='header'>
          <div className='logo-container'>
              <img 
                 className='logo'
                 src={LOGO_URL}
              />
          </div>
          <div className='nav-items'>
              <ul>
                 <li><Link to='/'>Home </Link> </li>
                 <li><Link to='/about'>About Us</Link></li>
                 <li><Link to='/contact'>Contact Us</Link></li>
                 <li ><Link to='/contact' >cart</Link></li>
                 <button className="border-2 bg-blue-500 p-2" onClick={()=>{loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button>
              </ul>
          </div>
      </div>
    )
  };

export default Header;