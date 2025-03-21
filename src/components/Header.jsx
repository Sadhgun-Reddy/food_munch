import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ()=>{
  const [loginBtn,setLoginBtn]=useState("Login");

  const onlineStatus = useOnlineStatus();
  
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)
  
  return(
      <div className='flex justify-between bg-slate-200 w-full'>
          <div className='logo-container'>
              <img 
                 className='w-28 '
                 src={LOGO_URL}
              />
          </div>
          <div className='flex items-center '>
              <ul className="flex  p-4 m-4">
              <li className={`px-4 ${
                    onlineStatus 
                    ? "text-green-500 font-bold" 
                    : "text-red-500 font-bold"
                }`}>
                  {onlineStatus ? "Online" : "Offline"}
              </li>
                 <li className="px-4"><Link to='/'>Home </Link> </li>
                 <li className="px-4"><Link to='/about'>About Us</Link></li>
                 <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                 <li className="px-4" ><Link to='/contact' >cart</Link></li>
                 <button className="border-2 bg-blue-500 p-2" onClick={()=>{loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button>
                 <li className="px-4" ><Link to='/contact' >{loggedInUser}</Link></li>

              </ul>
          </div>
      </div>
    )
  };

export default Header;