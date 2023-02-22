import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToggleContext from './context/ToggleContext';
import Login from './components/Login';

const getLocalStorage=()=>{
  let list = localStorage.getItem("userDetails");
  return list ? JSON.parse(list) : [];
}

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(getLocalStorage)

  useEffect(()=>{
    localStorage.setItem("userDetails", JSON.stringify(name));
  }, [name])
  return (
    <ToggleContext.Provider value={
      {
        name: name,
        password: password,
        setName:setName,
        setPassword: setPassword,
        user: user,
        setUser: setUser,
      }
    }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ToggleContext.Provider>
  )
}
