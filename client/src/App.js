import React, { useEffect, useState } from "react";
import Login from './components/Login';
import Home from "./components/Home";
import PwdRecovery from "./components/user/PwdRecovery";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



function App() {

  const [logged, setLogged] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/auth/verifytoken', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('authorization')}`
      }
    })
      .then(response => response.json())
      .then(response => {
        response.success ? setLogged(response) : setLogged({ success: false })
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pwdrecovery" element={<PwdRecovery />} />
        <Route exact path="/home" element={logged.success ? <Home /> : <Navigate to="/"/>} />
        <Route path="*" element={logged.success ? <Navigate to="/home"/> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
