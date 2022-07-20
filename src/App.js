import React from "react";
import { Header } from "./frontend/components/Header/Header";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Home } from "./frontend/pages/Home/Home";
import { Login } from "./frontend/pages/Signin/Signin";
import { Profile } from "./frontend/pages/Profile/Profile";
import {Route, Routes} from "react-router-dom"
import MockAPI from "./frontend/components/Mockman/Mock";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import RequireAuth from "./frontend/features/auth/RequireAuth";

function App() {
  const {token} = useSelector(state => state.auth);
  return ( <>
  <ToastContainer position="top-right" autoClose={1000}/>
    <Header/>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<MockAPI/>}/>
        <Route path="/home" element={<RequireAuth token={token}><Home/></RequireAuth>}/>
        <Route path="/profile" element={<RequireAuth token={token}><Profile/></RequireAuth>}/>
        
   </Routes>
   <Navbar/>   
  </>
);
}

export default App;