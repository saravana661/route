import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Service from "./components/Service";
const App =()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default App;
