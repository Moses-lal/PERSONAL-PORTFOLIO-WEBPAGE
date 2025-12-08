import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";




 const Education = () => {
  return (
    <>
    <div className='min-h-screen bg-black flex items-center
bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,128,128,0.22)_70%,rgba(0,0,0,1)_100%)] relative'>

     
     
     

     <div className='bg-white/5  p-5 relative ml-25'>
      
      <div className='flex gap-5 mt-15  '>

      <div className='relative border-b-2 border-[#008080] transition-all ease-out duration-300 hover:border-b-4 hover:border-[#008080] hover:-translate-y-4 '>
        <h3 className='text-xl text-white font-bold border-l-4 border-[#008080] pl-1.5'>Secondary</h3>
        <img src="./school1.jpg" className='w-70 my-5' />
        <h4 className=' text-white font-bold  border-[#008080] '>St. Montfort School, Bhopal </h4>
        <p className='text-[#008080] text-sm  font-bold'>Graduated in 2020</p>
        <p className='text-white text-sm font-medium mt-3 mb-2'>St. Montfort School is an English-medium, <br />co-educational school affiliated to <br /> Central Board of Secondary Education (CBSE)</p>
        <p className='text-[#008080] text-sm font-bold mb-1 '> 10th Percentage - 74%</p>
      </div>

       <div className='border-b-2 border-[#008080] transition-all ease-out duration-300 hover:border-b-4 hover:border-[#008080] hover:-translate-y-4'>
        <h3 className='text-xl text-white font-bold border-l-4 border-[#008080] pl-1.5'>Higher Secondary</h3>
        <img src="./school2.jpg" className='w-80 my-5' />
        <h4 className=' text-white font-bold  border-[#008080] '>St. Montfort School, Bhopal </h4>
         <p className='text-[#008080] text-sm font-bold'>Graduated in 2022</p>
         <p className='text-white text-sm font-medium my-3'>Completed foundational and senior academic <br />education with emphasis on holistic development <br />and co-curricular excellence</p>
         <p className='text-[#008080] text-sm font-bold'> 12th Percentage - 62%</p>
      </div>

       <div className='relative border-b-2 border-[#008080] transition-all ease-out duration-300 hover:border-b-4 hover:border-[#008080] hover:-translate-y-4'>
        <h3 className='text-xl text-white font-bold border-l-4 border-[#008080] pl-2'>B.tech in  <br />Computer Science & Engineering</h3>
        <img src="./school3.jpeg" className='w-70 my-5' />
        <h4 className=' text-white font-bold '>Madhav Institute of Technology and Science, Gwalior </h4>
        <p className='text-white font-bold'> </p>
        <p className='text-[#008080] text-sm font-bold'>Graduating in 2026</p>
        <p className='text-white text-sm font-medium my-3'>MITS stands among the oldest and most reputable <br /> technical institutions in central India, with a broad  portfolio <br />of courses in engineering, technology, architecture and more</p>
        <p className='text-[#008080] text-sm font-bold'> CGPA - 7.1 </p>
      </div>
      
     </div>

      <div className='absolute top-0 '>
      <h2 className='text-2xl text-white font-bold border-l-4 border-[#008080] pl-1.5'>Education</h2>
     </div>


     </div>

   
    <div className='bg-[#008080] w-25 h-50  absolute left-0 bottom-120  flex justify-center items-center'>
      <div className='space-y-8 text-2xl'>
        <FaPencilAlt className='hover:scale-[1.08]' />
        <FaSchool className='hover:scale-[1.08]'/>
        <IoSchoolSharp className='hover:scale-[1.08]'/>

      </div>
       
     </div>


      </div>
    
    
    
    </>
  )
}



export default Education;