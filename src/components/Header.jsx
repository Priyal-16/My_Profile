import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
    <div>
       <nav className='space-x-5 w-full h-16 bg-zinc-300 justify-center items-center'>
     <div className='flex justify-between p-5'>
       <div className='text-2xl font-bold text-black text-center'>
         <h2 className="text-black">Let's  Connect</h2>
       </div>
       <div className='space-x-10 text-black text-xl font-semibold text-center gap-3'>
         <Link to="/home">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/projects">Projects</Link>
         <Link to="/details">Details</Link>
       </div>
     </div>
   </nav>

   
    </div>
   
   
)}

export default Header