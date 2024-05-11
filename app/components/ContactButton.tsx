'use client'
import React from 'react'
import { Link } from "react-scroll";

const ContactButton = () => {
    return (
        <div className=''>
            <button>
                <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[20px] font-normal font-sans text-[#0e0e0e] bg-green-400 hover:bg-opacity-60 px-4 md:px-[5rem] py-1 md:py-2  
                    rounded-xl border-solid border-2 border-green-700 ml-3" >
                    Reach Out</Link>
            </button>
        </div>
    )
}

export default ContactButton