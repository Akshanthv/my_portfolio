import Link from 'next/link'
import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";



const Contacts = () => {
  return (
    <div id="contact" className='bg-[rgb(218,242,233)] font-sans'>
        <div>
          <h1 className='text-[26px] md:text-[40px] text-center py-10 '>
          Follow Me</h1>
          <div className='text-[26px] md:text-[40px] text-[#171717] flex flex-row gap-[10%] items-center justify-center pb-10 pt-0 md:pt-10'>
            <Link
            href={'https://www.linkedin.com/in/akshanthv/'} >
              <AiOutlineLinkedin
              />
            </Link>
            <Link
            href={'mailto:akshanthv@gmail.com'} >
              <MdMailOutline
              />
            </Link>
            <Link
            href={'tel:7993317790'} >
              <MdOutlineLocalPhone
              />
            </Link>
            <Link
            href={'https://www.instagram.com/akshanthv/'} >
            <FaInstagram/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Contacts