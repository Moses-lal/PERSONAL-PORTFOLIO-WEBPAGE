import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black flex items-center
bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,128,128,0.22)_70%,rgba(0,0,0,1)_100%)]">
       
       <div className="text-white ml-20"> 
       <span className="text-sm font-extralight flex items-center"><hr className="w-3"/>About Me</span>
       <span className="text-[#008080] text-2xl">Who Am I</span> 
       <hr className="w-100 text-[#008080] border-b-1 mt-2 mb-5"/>
       <p className="text-white text-md font-bold">I’m Moses, a <span className="text-[#008080]">fresher</span>  interested in exploring his areas of interest and learning new technologies. I’m currently pursuing <br /> B.Tech in Computer Science. Right now, I'm diving into web development, and it feels quiet fun to design <br />and develop websites providing, user a experience he will love to have</p>
       <p className="text-white text-md font-bold mt-5">I’m actively <span className="text-[#008080]">looking</span> for entry-level or junior <span className="text-[#008080]">opportunities</span> where I can apply my skills, <br /> contribute to <span className="text-[#008080]">real-world projects</span>, and grow under the guidance of industry professionals.</p>
      <div class="text-white font-semibold text-lg flex flex-col items-center space-y-1">
  <div class="flex space-x-3 mt-15 text-md">
    <span>Coffee Addict</span>
    <span className="text-[#008080] ">|</span>
    <span>Mountain Explorer</span>
    <span className="text-[#008080] ">|</span>
    <span>Design Perfectionist</span>
  </div>

  <div class="flex space-x-3 text-md">
    <span>Available for Freelance</span>
    <span className="text-[#008080] ">|</span>
    <span>Seeking New Opportunities</span>
    <span className="text-[#008080] ">|</span>
    <span>Fluent in English & Hindi</span>
  </div>

  <p class="text-center text-sm text-white mt-8">
  © 2025 Moses • Crafted with passion & clean code
</p>
</div>

       </div>
       
      </div>
    </>
  );
};

export default About;
