import React from "react";
import { FaReact } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { IoBook } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Education() {
  return (
    <>
      <div className="container-fluid bg-dark  " id="education">
        <h3 className="p-4 text-center text-white fw-medium mb-2">
          {" "}
          <IoBook /> Education{" "}
        </h3>

        <div className=" d-grid gap-5  justify-content-center edugrid ">
          <div className=" p-4 rounded-4  mb-3  " id="edu">
            <div>
              <h2>
                Secondary School - Class 10<sup>th</sup>{" "}
              </h2>
            </div>
            <div>
              {" "}
              <h3> From St. Montfort School </h3>
            </div>
            <div>
              <p className="fs-5 fw-medium"> Percentage - 72%</p>
            </div>
            <div>
              <p className="fs-5 fw-medium"> Patel Nagar ,Bhopal</p>
            </div>
            <div>
              <p className="fs-6 fw-medium">From 2019 – 2020</p>
            </div>
          </div>

          <div className=" p-4 rounded-4  mb-3 " id="edu">
            <div>
              <h2>
                Higher Secondary School - Class 12<sup>th</sup>{" "}
              </h2>
            </div>
            <div>
              {" "}
              <h3> From St. Montfort School </h3>
            </div>
            <div>
              <p className="fs-5 fw-medium"> Through PCM Stream</p>
            </div>
            <div>
              <p className="fs-5 fw-medium"> Percentage - 60%</p>
            </div>
            <div>
              <p className="fs-5 fw-medium"> Patel Nagar ,Bhopal</p>
            </div>
            <div>
              <p className="fs-6 fw-medium">From 2021 – 2022</p>
            </div>
          </div>

          <div className=" p-4 rounded-4 mb-3  " id="edu">
            <div>
              <h2>Madhav Institute of Technology and Science</h2>
            </div>
            <div className="mb-3">
              {" "}
              <h4> pursuing B.Tech in Computer Science and Engineering</h4>
            </div>
            <div>
              <h6> Gwalior, MP</h6>
            </div>
            <div>
              <h6>Nov 2022– May 2026</h6>
            </div>
          </div>
        </div>

        <div className=" text-white border  w-50 p-3 mt-2 pb-4  " id="tech">
          <h4>Technical Skillset</h4>
          <hr />
          <div className="fs-4 ">
            {" "}
            <b>Programming Languages:</b> Java, Python, C++
          </div>
          <div className="fs-4 ">
            {" "}
            <b> Frontend:</b> ReactJS, HTML, CSS, JavaScript{" "}
          </div>
          <div className="fs-4 ">
            {" "}
            <b>Backend:</b> ExpressJS, NodeJS, Spring Boot, Hibernate{" "}
          </div>
          <div className="fs-4 ">
            {" "}
            <b> Databases: </b> MongoDB, MySQL
          </div>
          <div className="fs-4 ">
            {" "}
            <b> Tools: </b>IntelliJ, NetBeans, VScode
          </div>
          <div className="fs-1 d-flex gap-4 mt-4 ">
            {" "}
            <FaReact /> <FaNode />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="white"
                d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
              ></path>
              <path
                fill="white"
                d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
              ></path>
            </svg>
            <DiMongodb />
            <FaHtml5 />
            <FaCss3Alt />
            
            <IoLogoJavascript />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
