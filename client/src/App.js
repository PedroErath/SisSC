import React, { useEffect, useState } from "react";
import Login from './components/Login';
import Home from "./components/Home";


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
        response.success ? setLogged(response) : setLogged({success: false})
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="">
      {
        logged.success ? <Home /> : <Login />
      }
    </div>
  );
}

export default App;
