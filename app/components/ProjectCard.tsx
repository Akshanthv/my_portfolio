import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiLinkExternal } from "react-icons/bi";


interface IProject {
    title: string;
    text: string;
    link: string;

}

const ProjectCard = ({ title, text, link }: IProject) => {
  return (
    <div className='block  border-t  border-[#75ff30] py-[48px] w-screen'>
    <div className='flex flex-col md:flex-row items-center'>
        
        <h4 className='text-[20px] font-semibold  text-[#606060] text-start justify-center italic mt-2 w-full md:w-[300px] ml-5 md:ml-20'>{title}</h4>
        <p className='font-sans text-[18px] md:text-[22px]  text-[#434343] w-[80%] md:w-[600px] ml-0 md:ml-10 pr-0 md:pr-10 mt-5 md:mt-0'>{text}</p>
        <Link href={link} target='_blank' >
            <BiLinkExternal 
            className='text-[30px] ml-[45%] md:ml-[200px] text-[#606060] hover:text-black mt-5 md:mt-0'
            />
            
        </Link>
    </div>
   
</div>
  )
}

export default ProjectCard