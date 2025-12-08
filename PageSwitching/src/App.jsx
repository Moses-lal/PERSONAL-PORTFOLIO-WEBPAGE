import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes , Route } from "react-router-dom";

const App = () => {
  return (
    <>
      

      <BrowserRouter>

      <Navbar />
      <main className="flex ">
        <Sidebar />
        <section className="border w-11/14 ">
          
         <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/contact" element={<Contact/>} />
          
          </Routes>

        </section>
        

      </main>

      </BrowserRouter>

      
    </>
  );
};

export default App;
