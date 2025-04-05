import React from 'react';
const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 bg-[#0F0F1A] py-10">


      {/* Section 1:  */}
      <div className="flex w-3/4 h-[40%] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-1/3 bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold text-black">Education</h1>
        </div>
        {/* Right */}
        <div className="w-2/3 p-10 flex flex-col justify-start gap-2">
          <h2 className="text-sm text-black ">Sagar Institute Of Science And Technology , Bhopal(India)<span className='text-black text-sm font-bold'>  (B.Tech)</span></h2>
          <h2 className="text-sm text-black ">Model Higher Secondary School, M.P.<span className='text-black text-sm font-bold'>  (XII)</span></h2>
          <h2 className="text-sm text-black ">Sanskaar Valley School, M.P.<span className='text-black text-sm font-bold'>  (X)</span></h2>
        </div>
      </div>


      {/*Section 2: */}
      <div className="flex w-3/4 h-[40%] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-1/3 bg-white flex justify-center items-center">
          <h1 className="text-2xl font-bold text-black">Academic Activities</h1>
        </div>
        {/* Right */}
        <div className="w-2/3 p-10 flex flex-col justify-start gap-2">
          <h2 className="text-sm text-black">Academic Topper
          </h2>
          <h2 className="text-sm text-black">Google Girl Hackathon </h2>
          <h2 className="text-sm text-black">Participated in Smart India Hackathon</h2>
          <h2 className="text-sm text-black">Participated in LakeCity Hackathon Organised By Jagran Lakecity</h2>
          <h2 className="text-sm text-black">Participated in SISTec Innovation Hackathon Organised By SISTec</h2>
        </div>
      </div>

      
    </div>
  );
};

export default About;
