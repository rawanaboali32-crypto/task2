import { Route, Routes } from "react-router-dom"
import MyNavbar from "./components/MyNavbar"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Card"



function App() {
 const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
  const savedLogin = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  setIsLoggedIn(savedLogin);
}, []);

useEffect(() => {
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
}, [isLoggedIn]);


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart (savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
   <MyNavbar/>
   
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
