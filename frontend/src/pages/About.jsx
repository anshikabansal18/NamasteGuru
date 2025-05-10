import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[500px] pb-8' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Namaste Guru, your trusted partner in connecting seekers of knowledge with experienced mentors. At Namaste Guru, we understand the challenges individuals face when it comes to finding the right guidance for personal and professional growth.</p>
          <p>Namaste Guru is committed to excellence in mentorship and education. We continuously strive to enhance our platform, integrating innovative features to ensure a seamless experience for both mentors and mentees. Whether you're seeking guidance for academic pursuits, career growth, or life skills, Namaste Guru is here to support you at every step of your journey</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Namaste Guru is to create a world where everyone has access to the wisdom and support of a mentor. We aim to bridge the gap between mentors and mentees, fostering meaningful connections that empower individuals to achieve their full potential and grow with confidence.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Seamless access to a diverse network of experienced mentors across various fields, ready to guide and inspire you on your journey.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and personalized guidance to help you stay on track with your learning and growth journey.</p>
        </div>
      </div>

    </div>
  )
}

export default About
