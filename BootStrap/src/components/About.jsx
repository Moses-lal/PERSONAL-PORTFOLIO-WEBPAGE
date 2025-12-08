import React from "react";
import moses from "../assets/photo3.jpg"
import hero from "../assets/hero.webp"
function About() {
  return (
    <>
    <div className="container-fluid  p-3  dabba" id="about">
       <h3 className="text-white text-center mb-4">About Me</h3>


       <div className="d-flex gap-5 justify-content-center ">
      <div className="align-content-start">
      <img src={moses} width="200px" height="200px" id="img" className="shadow" />
      </div>

      <div className="d-flex gap-1  ">
      <div className="container border p-3 rounded " id="about1">
        <div><h4>Moses Lal | Web Developer | Java Developer</h4></div>
       <div> <h5>Fresher looking for jobs in the field of </h5>  </div>
       <div> <h5>Full Stack in MERN </h5></div>
        <div> <h5>& Java Related Work  </h5>  </div>
        <div><h5>Java is my Frist And Comfort Language Below Is My </h5></div>
         <div><h5>Work & Projects </h5></div>
        <div><h5>Also Looking For Intenship for Experince</h5></div>
      </div>

      <div>
        <img src= {hero} width="380px" />
      </div>
      </div>
      </div>
      
    </div>
      
      
     
    </>
  );
}

export default About;
