import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


function ContactMe(){

    return(
      <>
      <div className="p-5 maincontact" id="contact">




        <h2 className=" p-4 fw-bolder text-white text-center">
       Contact Me 
      </h2>
        
        <div className="d-flex container-fluid align-content-center justify-content-center bg-gradient w-75 py-2" id="cont">
          <div className="border mt-4 text-light p-4 rounded-4 d-grid" id="cont1">
          <div className="border p-4 d-grid gap-5 rounded-5 " id="cont2">
            <h3 className="fw-bolder" id="cont3">Contact <br />Information</h3>

            <div>
              <div className="mb-4 "><CiMail  className="fs-2 cont4"/> <span className="fs-5 fw-medium mx-2">moseslal2692@gmail.com</span> </div>
            <div className="mb-4"><FaPhone className="fs-3 cont4"/> <span className="fs-5 fw-medium mx-2">+91 8269672164</span></div>
            <div className="mb-4"><FaLocationDot  className="fs-3 cont4"/> <span className="fs-5 fw-medium mx-2">Bhopal , Madhya Pradesh</span></div>
            </div>
              

            <p className="fs-5 fw-medium">I usually reply within 24 hours, <br />
             For urgent queries, please use email.</p>
          </div>

          <div className=" p-4 d-grid gap-3">
            <h3 className="fw-bold cont4" >Send Message</h3>
            <div>
               <input type="text" placeholder="your name" className="bg-dark text-white rounded-2 p-2"/>
              <input type="text" placeholder="your email" className="bg-dark text-white rounded-2 p-2 mx-4"/>
            </div>

             <div>
               <input type="text" placeholder="Phone" className="bg-dark text-white rounded-2 p-2"/>
              <input type="text" placeholder="Company" className="bg-dark text-white rounded-2 p-2 mx-4"/>
            </div>

             <div>
               <input type="text" placeholder="Website" className="bg-dark text-white rounded-2 p-2"/>
              <input type="text" placeholder="Reason" className="bg-dark text-white rounded-2 p-2 mx-4"/>
            </div>

            <textarea cols={50} rows={6} className="bg-dark text-white rounded-2 p-2 mx-2" placeholder="Message"></textarea>
            
            <div className="mt-2">
            <button className="bg-dark text-white rounded-2 p-2 mx-5 w-75 ">Send Message</button>

            </div>
            
          </div>
        </div>
        </div>
        
        {/* <hr className="text-white mt-5 pt-5"/> */}

      </div>
     
      </>

    )
}


export default ContactMe;