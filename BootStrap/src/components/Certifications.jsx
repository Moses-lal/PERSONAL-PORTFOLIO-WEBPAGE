import React from "react";
import { FaJava } from "react-icons/fa";


function Certifications() {
  return (
    <>
      <div className="container-fluid bg-secondary pt-2" id="certification">
        <h2 className=" text-center p-4 fs-1 fw-medium text-white pt-5 mb-5">
          Courses and Certificate{" "}
        </h2>

        <div className="d-flex justify-content-center gap-4">
          <div className="border p-5 justify-content-center align-content-center course">
            <h3>
              {" "}
              <b> Java Core</b>{" "}
            </h3>
            <p>
              Cybrom Technology Indrapuri , Bhopal <br />
              15th June 2024 - 18 August 2024 <br />
              Worked/Focused on basic programming skills <br />
              and clearing concept and logic{" "}
            </p>
          </div>

          <div className="border p-5 justify-content-center align-content-center course">
            <h3>
              {" "}
              <b> MERN Full Stack Developer</b>{" "}
            </h3>
            <p>
              Raj Institute of Coding & Robotics Minaal , Bhopal <br />
              22th June 2025 - 19 October 2025 <br />
              With NodeJs , ReactJs & ExpressJs <br />
              Building Website from Scratch{" "}
            </p>
          </div>

          <div className="border p-5 justify-content-center align-content-center course">
            <h3>
              {" "}
              <b> Deloitte Australia Data Analytics </b>{" "}
            </h3>
            <p>
              Job Simulation on Forage - April 2025 <br />
              <br />– Completed data analysis and forensic technology simulation{" "}
              <br />– Created data dashboards in Tableau and classified data
              using Excel
            </p>
          </div>


           <div className="border border-dark certicircle" id="c">
           <FaJava />
        </div>

        <div className="border border-dark certicircle" id="l">
           <img src={"/Deloitte.jpg"} className="certicircle" />
        </div>

        <div className="border border-dark certicircle" id="e">
          <img src="ricr.png" className="certicircle"  />
        </div>

        </div>

       

      </div>
    </>
  );
}

export default Certifications;
