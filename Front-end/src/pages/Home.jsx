import React from 'react'

const HomeSection = () => {
  return (
    <>
    <div className="flex p-0 m-0">
      <div className="min-h-screen md:w-1/2 bg-[#308ba4a8] w-[55%]">
        <div className="flex flex-col justify-center items-start h-full p-2 md:p-16">
          <h1 className="text-[28px] md:text-5xl font-bold mb-6 text-black">Explore Career, Colleges and Courses</h1>
          <p className="text-lg md:text-xl mb-6 text-black">A comprehensive platform for all your educational needs.</p>
          <a href="/signup" className="px-6 py-3 bg-[#16e1c0] text-black font-semibold rounded-full hover:bg-[#308ba4a8] transition-colors">Get Started</a>
        </div>
      </div>
      <div className="min-h-screen md:w-1/2 bg-[#16e1c0] w-[45%]">
      <div className="flex justify-center items-center h-full">
        <img className="" src="src/assets/CareerGuidance.png" alt="" srcset="" />
      </div>
      </div>
    </div>
    </>
  )
}
export default HomeSection