/* eslint-disable no-unused-vars */
import './index.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';

const App = () => {

  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Roman Reigns"
    };
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>

    <div>
      <Header />
      
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

export default App;

  