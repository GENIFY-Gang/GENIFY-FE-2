import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import PromptPage from './Pages/PromptPage/PromptPage';
import About from './Pages/About/About';
import Documentation from './Pages/Documentation/Documentation';
import FeedBack from './Pages/FeedBack/FeedBack';
import { RoleDataProvider } from './Pages/UserData/UserData';

function App() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const userDetails = window.localStorage.getItem("loggedData");

    if (userDetails !== null) {
      const data = JSON.parse(userDetails); 
      setUserData(data);
    } else {
    }
  }, []);
  
  return (
    <div className='App'>
      <BrowserRouter>
        <RoleDataProvider userData={userData}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/prompt-generator' element={<PromptPage />} />
        <Route path='/documentation' element={<Documentation/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/feed-back' element={<FeedBack/>}/>
        
      </Routes>
          </RoleDataProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
