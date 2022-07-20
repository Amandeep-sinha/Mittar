import { Header } from "./frontend/components/Header/Header";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Home } from "./frontend/pages/Home/Home";
import { Login } from "./frontend/pages/Signin/Signin";
import { Profile } from "./frontend/pages/Profile/Profile";
import {Route, Routes} from "react-router-dom"

function App() {
  return ( <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
   </Routes>
   <Navbar/>   
  </>
);
}

export default App;