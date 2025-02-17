import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
  const [loginBtn,setLoginBtn]=useState("Login")
  const onlineStatus = useOnlineStatus();
    return(
      <div className='flex justify-between'>
          <div className='logo-container'>
              <img 
                 className='w-28 '
                 src={LOGO_URL}
              />
          </div>
          <div className='flex items-center'>
              <ul className="flex  p-4 m-4">
                 <li className="px-4">{onlineStatus?"Online":"Offline"}</li>
                 <li className="px-4"><Link to='/'>Home </Link> </li>
                 <li className="px-4"><Link to='/about'>About Us</Link></li>
                 <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                 <li className="px-4" ><Link to='/contact' >cart</Link></li>
                 <button className="border-2 bg-blue-500 p-2" onClick={()=>{loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button>
              </ul>
          </div>
      </div>
    )
  };

export default Header;