import Link from 'next/link'
import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Contacts = () => {
  return (
    <div id="contact" className='bg-[rgb(218,242,233)] font-sans'>
        <div>
          <h1 className='text-[26px] md:text-[40px] text-center py-10 '>
          Contact Me At</h1>
          <div className='text-[26px] md:text-[40px] text-[#171717] flex flex-row gap-[10%] items-center justify-center pb-10 pt-0 md:pt-10'>
            <Link
            href={'https://x.com/MySpaceInfra'} target='_blank' >
              <FaXTwitter
              />
            </Link>
            {/* <Link  href="whatsapp://send?abid=+919618446474&text=Suman%2C%20I"
            >W
            </Link> */}
            <Link
            href={'mailto:akshanthv@gmail.com'} >
              <MdMailOutline
              />
            </Link>
            <Link
            href={'tel:9618446474'} >
              <MdOutlineLocalPhone
              />
            </Link>
            <Link
            href={'https://www.instagram.com/myspaceinfragroup/'} target='_blank' >
            <FaInstagram/>
            </Link>
            <Link href={'https://www.youtube.com/@myspaceinfragroup'} target='_blank' >
              <FaYoutube/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Contacts