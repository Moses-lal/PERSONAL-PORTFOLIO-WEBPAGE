import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation().pathname;
  console.log(location);

  const isActive = (path) => {
   return location === path ? " border-b-3 border-[#008080]" : "";
  }

  return (
     <>
  
  <div className="bg-black/50 backdrop-blur-sm p-1 fixed top-0 left-0 right-0 z-99 flex items-center justify-around">
    
    <div className="mr-100">
      <img src={'./logo.png'} className="w-20 object-fill rounded-lg " />
    </div>

    <div className="flex text-white space-x-7 font-medium text-md tracking-wide">
      <Link to={"/"} className={`${isActive("/")}`} >Home</Link>
      <Link to={"/about"} className={`${isActive("/about")}`}>About</Link>
      <Link to={"/project"} className={`${isActive("/project")}`} >Projects</Link>
      <Link to={"/contact"} className={`${isActive("/contact")}`}>Contact Me</Link>
      <Link to={"/education"} className={`${isActive("/education")}`}>Academics</Link>
    </div>
    
  </div>

  
  </>
  )
 
}

export default Navbar;
