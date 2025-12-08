import React from "react";
import nav1 from "/nav1.jpg";

function Navbar() {
  return (
    <>
    
        <div className="container-fluid bg-secondary p-2 d-flex align-items-center ">
          <h2 className="text-white">
            <img src={nav1} width="80px"  className="mx-1 rounded shadow shadow-lg"/>
            MOLio
          </h2>

          <div className="d-flex gap-1 border border-4 m-auto rounded-4 p-2 py-2 bg-dark">

            <div className="align-content-center p-2" id="nav">
              <a href="#about" className="text-decoration-none text-white  fs-5">About</a>
            </div>

          <div className="align-content-center p-2" id="nav">
            <a href="#education" className="text-decoration-none text-white fs-5">Education</a>
          </div>

          <div className="align-content-center p-2" id="nav" >
            <a href="#certification" className="text-decoration-none text-white fs-5">Certification</a>
          </div>

          <div className="align-content-center p-2" id="nav">
            <a href="#project" className="text-decoration-none text-white fs-5">Project</a>
          </div>

          <div className="align-content-center p-2" id="nav">
             <a href="#contact" className="text-decoration-none text-white fs-5">Contact Me</a>
          </div>
         
          </div>
        </div>

       
      
    </>
  );
}

export default Navbar;
