'use client'
import { NavLinks } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='fixed top-0 z-[50] w-screen bg-[#282c34] bg-opacity-100 md:bg-opacity-100'>
            <div className="relative flex items-start md:items-center  justify-between py-4 text-white flex-col md:flex-row">
                <div className='font-sans  text-xl  cursor-pointer flex items-center'>
                    <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} >
                        <Image
                            src={"/files/ak_w.png"}
                            alt='AK'
                            width={50}
                            height={50}
                            className='mr-2 md:mr-4 ml-10'
                        />
                    </Link>
                    <span
                        className='text-[25px] xl:text-[40px] md:text-[25px] font-sans  '
                    >Akshanth V</span>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}
                    className='text-3xl absolute right-6 top-6 cursor-pointer md:hidden'>
                    {isOpen ? <IoClose /> :
                        <IoMenu />
                    }


                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-lg bg-[#282c34] 
                md:z-auto z-[-1] left-0 w-full md:w-auto pt-10 md:pt-0 pl-8 md:ml-0
                transition-all duration-400 ease-in ${isOpen ? "top-18 opacity-100" : "top-[-400px]"} opacity-0 md:opacity-100 `}
                >
                    <li className='   text-lg font-light w-[140px] bg-transpernt border-solid border-[1px] rounded-md px-3 border-[#fafafa] md:mt-0 mt-10 '
                    ><a href='https://s3.amazonaws.com/akshanth.resume.portfolio/AkshanthV.pdf' download="CV" target="_blank">
                        Download CV</a></li>

                    <li className='xl:ml-8 md:ml-4 sm:ml-2 ml-0 my-7 md:my-0'>
                        <button>
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} 
                            className='  ml-4 '>Home</Link></button>
                    </li>
                    <li className='xl:ml-8 md:ml-4 sm:ml-2 ml-0 my-7 md:my-0'>
                    <button >
                        <Link activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} 
                            className='  ml-4 '>Skills</Link></button>
                    </li>
                    <li className='xl:ml-8 md:ml-4 sm:ml-2 ml-0 my-7 md:my-0'>
                    <button >
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} 
                            className='  ml-4 '>Projects</Link></button>
                    </li>
                    <li className='xl:ml-8 md:ml-4 sm:ml-2 ml-0 my-7 md:my-0'>
                    <button >
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} 
                            className='  ml-4 mr-10'>Contact</Link></button>
                    </li>


                    {/* {NavLinks.map((navlink) => (
                        
                            <li key={navlink.name}
                            className='md:ml-8 my-7 md:my-0'>
                                <Link className='  ml-4 '
                                href={navlink.link}>{navlink.name}</Link>
                            </li>
                        ))} */}
                </ul>

            </div>
        </div>
    )
}

export default Navbar