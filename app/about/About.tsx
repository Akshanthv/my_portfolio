import React from 'react'
import ContactButton from '../components/ContactButton'
import Image from 'next/image'
import ak_bg from '../about/ak_bg.png'


const About = () => {
  return (
    <div id="home" style={{ backgroundImage: "url(/files/home_bg.jpeg)" }}
        className="flex bg-cover bg-center relative w-screen h-screen flex-col md:flex-row font-sans font-light">   
        <div className="items-start mt-28 md:ml-24 xl:ml-40 ml-10 z-[2]" >
          <h4 
          className="text-[30px] md:text-[40px] text-green-500 ">
            Hello this is</h4>
          <h1 className="text-[40px] md:text-[60x] xl:text-[70px] font-sans text-start text-white mt-5 md:mt-0 w-full">
            Akshanth V</h1>
          <div className="flex flex-row mt-3 mb-10">
            <h4 className="text-[30px] text-center text-white "
            >A Passionate </h4>
            <h4
              className="text-[30px] text-center text-green-500 pl-2 ">
              Engineer</h4>
              
          </div>
          <ContactButton />
        </div>
        <div>
        {/* <img
            src="/files/ak_bg.png"
            alt="Developer"
            className=" absolute right-3 bottom-0 sm:w-[400px] w-[300px] md:w-[700px] md:h-[700px] "
          /> */}

        <Image 
        src={ak_bg}
        alt={'Akshanth'} 
        className='sm:max-w-[400px] max-w-[300px] md:max-w-[500px] xl:max-w-[620px] absolute right-0 bottom-0 z-[1] '
        />

        </div>
      </div>
    
  )
}

export default About