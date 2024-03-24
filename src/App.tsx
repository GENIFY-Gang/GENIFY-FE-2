import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import PromptPage from './Pages/PromptPage/PromptPage';
import About from './Pages/About/About';
import Documentation from './Pages/Documentation/Documentation';
import FeedBack from './Pages/FeedBack/FeedBack';
import { RoleDataProvider } from './Pages/UserData/UserData';
import NotFound from './Pages/NotFound/NotFound'; // Import your custom NotFound component

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDetails = window.localStorage.getItem("loggedData");

    if (userDetails !== null) {
      const data = JSON.parse(userDetails);
      setUserData(data);
    }
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <RoleDataProvider userData={userData}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/prompt-generator' element={<PromptPage />} />
            <Route path='/documentation' element={<Documentation />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/feed-back' element={<FeedBack />} />
            {/* Catch-all route for handling unknown routes */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </RoleDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
