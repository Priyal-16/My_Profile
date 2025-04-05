import React from 'react'
import backgroundImage from '../assets/i3.avif'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import gmailIcon from '../assets/gmail.png'

import Header from './Header'

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />


      <div className="relative z-10">
        <Header />
      </div>
      

      <div className="flex items-center justify-center relative z-10 mt-32">
      <a href="http://www.linkedin.com/in/priyalgupta16">
  <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-300 cursor-pointer mr-5 rounded"/>
      </a>

      <a href="https://github.com/Priyal-16">
  <img src={githubIcon} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-300 cursor-pointer mr-5 rounded"/>
      </a>

      <a href="mailto:priyalgupta042@gmail.com">
  <img src={gmailIcon} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-300 cursor-pointer rounded"/>
      </a>
      </div>


      <div className="flex items-center justify-center relative">
        <a href="https://docs.google.com/document/d/1Podt--2MDZM1Kb8AcXMrtBH5R9K6dHx2H28OlRqWDrE/edit?usp=sharing">
        <button className="relative gap-2 mt-5 px-6 py-3 text-white bg-blue-300 bg-opacity-10 backdrop-blur-md rounded-xl border border-white/20 shadow-md transition-all duration-300 hover:bg-opacity-20 hover:shadow-blue-500/50 hover:scale-105" > Download Resume
        </button>
        </a>
      </div>
    </div>
  )
}

export default Home
