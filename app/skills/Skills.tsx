import React from 'react'
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";
import { SiPython } from "react-icons/si";
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

import { TbSettingsCode } from "react-icons/tb";
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills'
      className='w-screen pt-10 pb-20 font-sans font-light text-[22px] '>
      <div >
        <h2 className=' text-[40px] md:text-[50px] text-[#000] text-start ml-10 md:ml-24 mt-10 mb-10'>
          Skills</h2>
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mt-14 items-center justify-center gap-10 md:gap-10'>

          <div className='  bg-[#C0C0E3]  rounded-xl py-4 px-4 w-[250px] h-[480px] md:w-[330px] md:h-[540px]'>
            <h2 className='text-[22px] md:text-[30px] font-sans text-black px-4 '
            >Languages</h2>
            < div className=' divst-none font-normal flex flex-col justify-between mt-3 h-[80%] text-[16px] md:text-[18px] xl:text-[18px] px-6 text-[#434343]  '>
              <div className='flex flex-row'>
                < div className=' text-center justify-center '>
                  <FaJava
                    className='text-[50px] md:text-[60px]  text-[#f88329] bg-[#f9f9f9] rounded-lg p-1 shadow-sm shadow-[#272727]' />
                  Java
                </ div>
                <div className='ml-14  md:ml-32 mt-6 text-center justify-center'>
                  <SiJavascript className='text-[50px] md:text-[60px] text-[#e9d544] bg-[#202020] rounded-lg shadow-sm shadow-[#272727] ml-3 ' />
                  Javascript
                </div>
              </div>
              < div className='ml-3 md:ml-[80px] mt-0 md:mt-3 items-center justify-center'>
                <SiTypescript className='text-[50px] md:text-[58px]  text-[#397AC7] shadow-sm  shadow-[#272727] bg-[#eaeaea] rounded-lg ml-3' />
                Typescript
              </ div>
              <div className='flex flex-row'>
                < div className=' justify-center text-center mt-8 md:mt-8' >
                  <SiHtml5 className='text-[50px] md:text-[60px] text-[#244ADC] -mt-2  bg-[#eae4e4] rounded-lg shadow-sm shadow-[#272727]' />
                  HTML
                </ div>
                < div className='ml-[80px] md:ml-32 -mt-5 md:mt-0 justify-center text-center '>
                  <SiCss3 className='text-[50px] md:text-[55px] text-[#E4552E]   bg-[#fff] rounded-lg shadow-sm shadow-[#272727]' />
                  CSS
                </ div>
              </div>
              <div className='flex flex-row '>
                < div className=' text-center ml-8 mt-10 md:mt-10 '>
                  <BsFillDatabaseFill className='text-[46px] md:text-[50px] text-[#2074B9]   bg-[#fff] rounded-lg shadow-sm shadow-[#272727]' />
                  SQL</ div>
                < div className='text-center justify-center -mt-4 md:mt-4 ml-14 md:ml-20 '>
                  <SiPython className='text-[47px] md:text-[50px] text-[#3D7DB7]  bg-[#fff] rounded-lg shadow-sm shadow-[#272727]' />
                  Python
                </ div>
              </div>
            </ div>
          </div>
          <div className=' block bg-[#1D1C1F] rounded-xl px-6 py-6 w-[250px] h-[480px] md:w-[330px] md:h-[540px]'>
            <h2 className='text-[22px] md:text-[30px] font-sans text-[#F5F5F7]  text-start'>Technologies</h2>
            < div className=' divst-none font-light   mt-[30px] ml-[10px] text-[16px] md:text-[17px] xl:text-[17px] text-start text-[#F5F5F7] '>
              <div className='flex flex-row'>
                < div className='  mt-0 md:mt-6 '>
                  <SiSpringboot className='text-[50px] md:text-[60px]  text-[#72B444] bg-[#f9f9f9] rounded-lg p-1 shadow-sm shadow-[#f2f2f2] ml-0 md:ml-5' />
                  Spring Boot
                </ div>
                < div className=' ml-0 md:ml-12 text-center justify-center '>
                  <RiDatabase2Fill className='text-[50px] md:text-[60px] text-[#72B444] bg-[#f9f9f9] rounded-lg  shadow-sm shadow-[#f2f2f2] ml-7' />
                  Spring Data JPA
                </ div>
              </div>

              < div className='ml-3 md:ml-14 mt-5  '>
                <TbSettingsCode className='text-[50px] md:text-[55px] text-[#1b1b1b] bg-[#f9f9f9] rounded-lg  shadow-sm shadow-[#f2f2f2] ml-[52px] md:ml-[60px]' />
               <h4 className='ml-16 font-light'> REST</h4> 
              </ div>
              <div className='flex flex-row '>
                < div className=' justify-center  text-center mt-2 md:mt-0'>
                  <FaReact className='text-[50px] md:text-[56px] text-[#67DBFA] bg-[#2f2f2f] rounded-lg  shadow-sm shadow-[#f2f2f2] ml-2' />
                  React JS</ div>

                < div className='ml-12 md:ml-24 mt-4 md:mt-9  text-center '>
                  <FaAws className='text-[50px] md:text-[50px] text-[#ff893a] bg-[#f9f9f9] rounded-lg shadow-sm shadow-[#f2f2f2] ml-5 p-1' />
                  AWS(Basics)</ div>
              </div>
              < div className='ml-14 md:ml-20'>
                <TbBrandDjango className='text-[50px] md:text-[50px] text-[#298865] bg-[#f9f9f9] rounded-lg shadow-sm shadow-[#f2f2f2]' />
                Django</ div>
            </ div>
          </div>

          <div className=' block  bg-[rgb(218,242,233)] rounded-xl p-6 w-[250px] h-[480px] md:w-[330px] md:h-[540px]'>
            <h2 className='text-[22px] md:text-[30px] font-sans text-black  text-start'
            >Tools</h2>
            < div className=' divst-none font-normal   gap-y-[30px] mt-8 ml-[10px] text-[16px] md:text-[18px] xl:text-[18px] text-[#434343] '>
              <div className='flex flex-row'>
                < div className='pl-0 md:pl-12 '>
                  <FaGithub className='text-[50px] md:text-[60px] text-[#000] bg-[#f9f9f9] rounded-lg shadow-sm shadow-[#272727] p-1' />
                  GitHub</ div>
                < div className='  ml-20 mt-10 text-center justify-center'>
                  <VscVscodeInsiders className='text-[50px] md:text-[58px] text-[#397AC7] bg-[#131212] rounded-lg shadow-sm shadow-[#272727]' />
                  Vs Code </ div>
              </div>
              <div className='flex flex-row'>
                < div className=' mt-5 text-center justify-center'>
                  <SiSpring className='text-[50px] md:text-[55px] text-[#72B444] bg-[#f2f2f2] rounded-lg shadow-sm shadow-[#272727] p-1' />
                  STS</ div>
                < div className='  pl-20 mt-16 text-center'>
                  <SiPostman className='text-[50px] md:text-[60px] text-[#FE7041] bg-[#f9f9f9] rounded-lg shadow-sm shadow-[#272727] ml-1 p-1' />
                  Postman</ div>
              </div>
              < div className='ml-0 mt-6'>
                <GrMysql className='text-[50px] md:text-[60px] text-[#397AC7] bg-[#f2f2f2] rounded-lg shadow-sm shadow-[#272727] ml-11' />
                MySQL Workbench</ div>
            </ div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills