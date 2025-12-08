import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiSuitcaseFill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";



const Home = () => {
  return (
    <>

     <div class="min-h-screen bg-black flex items-center
bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,128,128,0.22)_70%,rgba(0,0,0,1)_100%)]">

   <div className="flex mx-60   ">

    <div className="space-y-2">
   <h2 className="text-white text-5xl font-bold"> Hi , I'm Moses <span className="text-[#008080]">Lal</span> </h2>
   <div className="space-y-8">
   <p className="text-white text-4xl font-bold">Full Stack <span className="text-[#008080]">Web Developer</span>  </p>
   <p className="text-white text-md font-bold">I create smooth, high-performing web experiences that feel modern,<br /> intuitive, and fast. With real-world MERN expertise, I turn ideas into clean, <br /> scalable apps that people actually love to use. <br /> 
    <br/> "Evolving from beginner to builder — one project, one bug, <br /> one <span className="text-[#008080]">breakthrough</span> at a time."  </p>
   </div>

   <div className="flex items-center text-white gap-5 mt-8 ">
    <div className="flex items-center">
    <IoLocationSharp className="text-[#008080]"/> <span className="text-sm mx-1 font-bold">Bhopal</span> 
    </div>

    <div className="flex items-center">
    <RiSuitcaseFill className="text-[#008080]"/> <span className="text-md mx-1 font-medium">Available Now</span>
    </div>
   </div>


   <div className=" mt-8 flex  gap-5">
    <button className="border rounded-xl p-3 flex items-center gap-1 text-[#008080] hover:bg-[#008080]/90 hover:text-black hover:border-black"> <FaLongArrowAltRight />Hire Me </button>
    <button className="border rounded-xl p-3 flex items-center gap-1 bg-[#008080] border-[#008080] text-black"><MdOutlineFileDownload />Resume</button>
   </div>

   <hr className="text-[#008080] mt-8"/>

   <div className="text-white flex gap-5 mt-8">
   <span className="text-md ">Follow Me : </span> 
   <div className="flex gap-5 items-center text-xl">
    <a href=""><FaInstagram /></a> <a href="https://github.com/Moses-lal"><RxGithubLogo /></a>  <a href="https://www.linkedin.com/in/moses-lal-6a2196348/"><FaLinkedin /></a>
   </div>
    
   </div>
    </div>

   </div>

</div>


       
    </>
  );
};

export default Home;
