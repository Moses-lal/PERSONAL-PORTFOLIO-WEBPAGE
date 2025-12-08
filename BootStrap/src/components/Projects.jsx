import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

function Projects() {


  function left() {
    let currentloc = Number(
      document.getElementById("project2").style.marginLeft.split("px")[0]
    );

    if (currentloc === 0) return;

    currentloc += 400;

    document.getElementById("project2").style.marginLeft = currentloc + "px";
  }


  function right() {
    let currentloc = Number(
      document.getElementById("project2").style.marginLeft.split("px")[0]
    );

    if (currentloc === -2800) {
      return;
    }

    currentloc -= 400;

    document.getElementById("project2").style.marginLeft = currentloc + "px";
  }











  return (
    <>
      <div className="bg-dark  px-3 pb-5" id="project">
        <div className="bg-primary-subtle p-3 mx-2 rounded-4">
          <h3 className="fw-bolder fs-2 text-black">Featured Projects </h3>
        </div>

        <div
          className="border border-light text-white p-3 d-flex gap-5 overflow-hidden"
          id="project1"
        
        >


          <div className=" d-flex gap-5 rounded-3 " id="project2"  style={{marginLeft:0}} >


           <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/edu.png"} width={"380px"} height={"310px"} className="object-fit-cotain" />
            </div>
            <h4 className="fw-bold">E-Learning Paltform - </h4>
            <p className="fs-6 fw-medium">
              a Learning hub for Fresher's To learn and  <br />
              develop skills in every domain <br />
              <span className="fs-5 fw-bold cont4">Made In HTML/CSS/JS </span> <br />
              More Info- <br />An interactive online learning platform that provides courses, tutorials, and resources across various subjects, enabling learners to study anytime 
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/virtual2.png"} width={"380px"} height={"310px"} className="object-fit-cover" />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

           <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/molio1.png"} width={"380px"} height={"310px"} className="object-fit-cover" />
            </div>
            <h4 className="fw-bold">Personal Portfolio - </h4>
            <p className="fs-6 fw-medium">
              sharing my projects and more info via website <br />
              here's my skills showcasing skills  <br />
              <span className="fs-5 fw-bold cont4">Made In BOOTSTRAP </span> <br />
              More Info- <br />Designed and developed a attractive Portfolio using Bootstrap, featuring a detailed and clean presentation of myself and work .
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/chat.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Real-Time Chat Appication - </h4>
            <p className="fs-6 fw-medium">
              a very cool chatapp which Provide end-to-end connection in  <br />
              real time enabling great experince <br />
              <span className="fs-5 fw-bold cont4">Made with SoiketIO </span> <br />
              More Info- <br />Built a real-time chat application using WebSockets. enabling users to send and receive instant messages, supports multiple users, live updates, and seamless communication across devices
            </p>
          </div>

            <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/cafe.png"} width={"380px"} height={"310px"} />
            </div>
            <h4 className="fw-bold">Klassy Cafe - </h4>
            <p className="fs-6 fw-medium">
              one of my frist project design using css <br />
              to make a professional website in attractive manner <br />
              <span className="fs-5 fw-bold cont4">Made with HTML/CSS </span> <br />
              More Info- <br />A attractive classy website for cafe showing their 
              staff and delicious food with all details for reaching and having great time with their special desert 
            </p>
          </div>


          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/bill.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Invoice Billing System - </h4>
            <p className="fs-6 fw-medium">
              it is made to make the calculation easy and <br />
              fast much needed for small shop <br />
              <span className="fs-5 fw-bold cont4">Made with JS/EXPRESSJS </span> <br />
              More Info- <br />Developed an invoice billing system that automates invoice generation, billing, and payment tracking. The system allows generate digital invoices, and maintain transaction records with accuracy and efficiency
            </p>
          </div>

           <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/word.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">WORD GAME - </h4>
            <p className="fs-6 fw-medium">
              a fun game with joyous and engaging word <br />
               challenges, entertained while boosting their vocabulary <br />
              <span className="fs-5 fw-bold cont4">Made with JAVASCRIPT </span> <br />
              More Info- <br />Created a fun game designed to improve vocabulary, test quick thinking, and provide an entertaining learning experience for players of all ages
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/shop.png"} width={"350px"} height={"300px"} className="object-fit-fill"/>
            </div>
            <h4 className="fw-bold">SHOPIFY - </h4>
            <p className="fs-6 fw-medium">
              a website to shop new cool fasionable products <br />
              with existing prices and great look  <br />
              <span className="fs-5 fw-bold cont4">Made with API </span> <br />
              More Info- <br />Developed an online shopping website integrated with APIs to manage products, categories, and user data dynamically. ensuring a seamless shopping experience across devices
            </p>
          </div>

          </div>
          
        </div>

        <button onClick={left} id="left">
          <FaCircleChevronLeft />
        </button>
        <button onClick={right} id="right">
          <FaCircleChevronRight /> 
        </button>
      </div>
    </>
  );
}

export default Projects;
