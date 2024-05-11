import React from 'react'
import { FaJava } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaPython } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { RiDatabase2Fill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSpring } from "react-icons/si";
import rest_icon from "./rest_icon.png"
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' 
    className='w-screen pt-10 pb-20 font-sans  '>
        <div >
            <h2 className=' text-[40px] md:text-[50px] text-[#000] text-start ml-10 md:ml-24 mt-10 mb-10'>
                Skills</h2>
              <div className='flex flex-col md:flex-row mt-14 items-center justify-center gap-10 md:gap-10'>
              <div  className=' block bg-[#C0C0E3]  rounded-xl py-4 px-4 w-[250px] h-[480px] md:w-[330px] md:h-[580px]'>
              <h2 className='text-[20px] md:text-[30px] font-sans text-black text-start '
              >Languages</h2>
              <ul className='list-none font-normal grid grid-cols-2 gap-y-[30px] justify-between mt-[30px] ml-[15px] text-[16px] md:text-[18px] xl:text-[18px] text-start  text-[#434343]'>
                <li>
                  <FaJava 
                  className='text-[50px] text-[#f88329]' />
                  Java</li>
                <li>
                  <TbBrandJavascript className='text-[50px] text-[#F7E029] ' />
                  Javascript</li>
                  <li>
                  <TbBrandTypescript className='text-[50px] text-[#397AC7]' />
                  Typescript
                  </li>
                <li>
                <TiHtml5 className='text-[50px] text-[#2074B9] ' />
                  HTML</li>
                  <li>
                  <FaCss3Alt className='text-[50px] text-[#E4552E] ' />
                    CSS
                  </li>
                <li>
                <BsFillDatabaseFill className='text-[50px] text-[#2074B9] '/>
                  SQL</li>
                <li>
                <FaPython className='text-[50px] text-[#3D7DB7]' />
                  Python</li>
              </ul>
            </div>
            <div className=' block bg-[#1D1C1F] rounded-xl py-4 px-4 w-[250px] h-[480px] md:w-[330px] md:h-[580px]'>
              <h2 className='text-[20px] md:text-[30px] font-sans text-[#F5F5F7]  text-start'
              >Technologies</h2>
              <ul className='list-none font-normal grid grid-cols-2 gap-y-[30px] mt-[30px] ml-[10px] text-[16px] md:text-[18px] xl:text-[18px] text-start text-[#F5F5F7] '>
                <li> <SiSpringboot  className='text-[50px] text-[#72B444]' /> Spring Boot</li>
                <li><RiDatabase2Fill  className='text-[50px] text-[#72B444]'/>Spring Data JPA</li>
                <li> 
                  <Image
                  src={rest_icon}
                  alt={"STS"}
                  className='w-[50px]'/>
                  Restful Web Services</li>
                <li>
                  <FaReact  className='text-[50px] text-[#67DBFA]'/>
                  React JS</li>
                <li>
                <FaAws  className='text-[50px] text-[#808182]'/>
                  AWS(Basics)</li>
                <li>
                  <TbBrandDjango  className='text-[50px] text-[#103427]'/>
                  Django</li>
              </ul>
            </div>
            
            <div className=' block  bg-[rgb(218,242,233)] rounded-xl py-4 px-4 w-[250px] h-[480px] md:w-[330px] md:h-[580px]'>
              <h2 className='text-[20px] md:text-[30px] font-sans text-black  text-start'
              >Tools</h2>
              <ul className='list-none font-normal grid grid-cols-2 gap-y-[30px] mt-[30px] ml-[10px] text-[16px] md:text-[18px] xl:text-[18px] text-[#434343] text-start'>
              <li>
                <FaGithub  className='text-[50px] text-[#000]'/>GitHub</li>
              <li>
                <VscVscodeInsiders  className='text-[50px] text-[#397AC7]'/>Vs Code </li>
              <li>
                <SiSpring className='text-[50px] text-[#72B444] ' />
                STS</li>
              <li>
                <SiPostman  className='text-[50px] text-[#FE7041]'/>Postman</li>
              <li>
                <GrMysql  className='text-[50px] text-[#397AC7]'/>MySQL Workbench</li>
              </ul>
            </div>
              </div>
        </div>
    </div>
  )
}

export default Skills