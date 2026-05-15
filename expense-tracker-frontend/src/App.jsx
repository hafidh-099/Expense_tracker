import HeroSection from "./components/Home/HomePage";

import { BrowserRouter, Routes,Route } from "react-router-dom";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import LoginForm from "./components/Users/Login";
import RegistrationForm from "./components/Users/Register";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import { useSelector } from "react-redux";
useSelector


const App=()=>{
  // selector use to get select and get value from slice
  const userInfo = useSelector((state=>state?.auth?.user))
  return (

    <BrowserRouter>
    {/* we put navbar here bcs we want to be available everywhare */}
    {userInfo?<PrivateNavbar/>:<PublicNavbar/>}
    <Routes>
      <Route path="/" element={<HeroSection/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App