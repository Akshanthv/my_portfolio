'use client'

import React, { useState } from 'react'
import IProject from './IProject'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'



const ProjectCard = ({ id, title, text,onClick}: IProject & { onClick: () => void }) => {

  return (
    <div className='block  border-t  border-[#75ff30] py-[48px] w-screen '
    // bg-cover bg-[url("../public/files/sample_img.jpg")]
    onClick={onClick}>
      {/* <img src={image}/> */}
      {/* <Image src={image} alt='image'
      width={600}
      height={600}/> */}
    <div className='flex flex-col md:flex-row items-center'>        
        <h4 className='text-[20px] font-semibold  text-[#606060] text-start justify-center italic mt-2 w-full md:w-[300px] ml-5 md:ml-20'>{title}</h4>
        <p className='font-sans text-[18px] md:text-[22px]  text-[#434343] w-[80%] md:w-[600px] ml-0 md:ml-10 pr-0 md:pr-10 mt-5 md:mt-0'>{text}</p>    
        <a onClick={onClick} target='_blank' >
            <BiLinkExternal 
            className='text-[30px] ml-0 md:ml-[200px] text-[#606060] hover:text-black mt-5 md:mt-0'
            />
            
        </a>

    </div>
   
</div>
  )
}

export default ProjectCard