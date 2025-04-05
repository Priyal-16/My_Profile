import React from 'react';
import Screenshot1 from '../assets/s1.png';
import Screenshot2 from '../assets/s2.png';
import Picture from '../assets/Picture1.png'

const Project = () => {
  return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#2C2C54] py-10">

      {/* Section 1 */}
      <div className="flex w-3/4 h-[50%] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-[50%] bg-white flex justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(${Screenshot1})` }}
          />
        </div>
        {/* Right */}
        <div className=" ml-10 w-[50%] p-10 flex flex-col justify-start gap-2 text-sm">
          <span className="text-black">
                   <h1 className="text-sm text-black font-bold">Travel & Tourism Website</h1> 
                   Travel blogs, tips, and cultural insights
                   <br />
                        Integration Of Travel Data
                        <br />
                        Travel Guides And Tips
                        <br />
                        Personalization  
          </span>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex w-3/4 h-[50%] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-[50%] bg-white flex justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${Screenshot2})` }}
          />
        </div>
        {/* Right */}
        <div className="ml-10 w-[50%] p-10 flex flex-col justify-start gap-2 ">
          <span className="text-black text-sm">
          <h1 className="text-sm text-black font-bold">Employee Management System</h1>
          
          Attendance & Leave Management
          <br/>
          Employee Profiles:
          <br/>
          Performance Tracking
          <br/>
          Role-Based Access
          <br/>
          Reports & Analytics:  
          </span>
        </div>
      </div>


      {/* Section 3 */}
      <div className="flex w-3/4 h-[50%] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-[50%] bg-white flex justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ backgroundImage: `url(${Picture})` }}
          />
        </div>
        {/* Right */}
        <div className=" ml-10 w-[50%] p-10 flex flex-col justify-start gap-2 text-sm">
          <span className="text-black">
                   <h1 className="text-sm text-black font-bold">Sustainable Fertilizer Usage Optimizer For Higher Yield</h1> 
                   Enhances soil fertility by soil analysis
                   <br />
                   Recommending optimal fertilizers 

                        <br />
                        Alternatives to monocropping
                        <br />
                        Provide alerts to farmers  
                        <br />
                        Aware of the existing lack of transparency
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
