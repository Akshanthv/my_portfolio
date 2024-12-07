import React from 'react'
import ContactButton from '../components/ContactButton'
import Image from 'next/image'
import ak_bg from '../about/ak_bg.png'


const About = () => {
  return (
    <div id="home" style={{ backgroundImage: "url(/files/home_bg.jpeg)" }}
      className="flex bg-cover bg-center relative  w-screen h-screen flex-col md:flex-row font-sans font-light ">
      <div className="items-start mt-28 md:ml-24 xl:ml-40 ml-10 z-[2] w-[90%] xl:w-[60%] md:w-[60%] sm:w-[50%]" >
        <div>
          <h4
            className="text-[30px] md:text-[40px] text-green-500 ">
            Hello, this is</h4>
           <h1 className="text-[40px] sm:text-[40px] md:text-[60x] xl:text-[70px] font-sans text-start text-white  w-full">
            Akshanth V</h1>
        </div>
        <div className="flex flex-col md:flex-row md:text-[22px] text-[22px] xl:text-[30px] sm:[22px]">
          <h4 className=" text-white "
          >An enthusiastic<br /> </h4>
          <h4
            className=" text-green-500 pl-0 md:pl-2 mb-5 md:mb-0">
            and passionate engineer</h4>

        </div>
        <p className=' text-[16px] md:text-[20px] text-[#efefef] mb-5 hidden md:block xl:block sm:block justify-between text-start mr-10'
        >I thrive on exploring and implementing the latest
          technologies to create innovative solutions.
          Expert in application and architecture design with excellent problem solving skills.</p>

        <ContactButton />
      </div>
      <div className=' w-[40%]'>
        <Image
          src={ak_bg}
          alt={'Akshanth'}
          className='sm:max-w-[400px]  max-w-[300px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[610px] absolute right-0 bottom-0 z-5 md:z-2 md:mt-0 '
        />
      </div>
    </div>

  )
}

export default About