import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>cart</li>
                 <button className="login" onClick={()=>{loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button>
              </ul>
          </div>
      </div>
    )
  };

export default Header;