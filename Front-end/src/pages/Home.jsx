import React from 'react'

const careerOptions = [
  { name: 'Engineering', description: 'Explore various engineering disciplines and career paths.', img: 'src/assets/SoftwareEngineering.png' },
  { name: 'Medicine', description: 'Learn about various medical fields and career opportunities.', img: 'src/assets/Medicine.jpg' },
  { name: 'Product Management', description: 'Understand the role of product managers in tech companies.', img: 'src/assets/ProductManagement.webp' },
  { name: 'Graphic Design', description: 'Discover careers in visual communication and design.', img: 'src/assets/Graphic-Design.webp' },
  { name: 'Art', description: 'Explore various art disciplines and career paths.', img: 'src/assets/Art.webp' },
  { name: 'Data Science', description: 'Learn about data analysis, machine learning, and career opportunities.', img: 'src/assets/datascience.jpg' },
  { name: 'Law', description: 'Understand the legal profession and various career options.', img: 'src/assets/Law.webp' },
  { name: 'Business', description: 'Discover careers in business management, finance, and marketing.', img: 'src/assets/business.jpg' },
];

const HomeSection = () => {
  return (
    <>
    <div className="flex p-0 m-0">
      <div className="min-h-screen md:w-1/2 bg-[#308ba4a8] w-[55%]">
        <div className="flex flex-col justify-center items-start h-full p-2 md:p-16">
          <h1 className="text-[28px] md:text-5xl font-bold mb-6 text-black">Explore Career, Colleges and Courses</h1>
          <p className="text-lg md:text-xl mb-6 text-black">A comprehensive career guidance portal for students in Jammu and Kashmir.</p>
          <a href="/signup" className="px-6 py-3 bg-[#16e1c0] text-black font-semibold rounded-full hover:bg-[#308ba4a8] transition-colors">Get Guidance</a>
        </div>
      </div>
      <div className="min-h-screen md:w-1/2 bg-[#16e1c0] w-[45%]">
      <div className="flex justify-center items-center h-full">
        <img className="" src="src/assets/CareerGuidance.png" alt="" srcset="" />
      </div>
      </div>
    </div>
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Explore Career Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {careerOptions.map((career) => (
            <div key={career.name} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={career.img} alt={career.name} className="w-full h-full  mb-1" />
              <h3 className="text-lg font-semibold mb-2">{career.name}</h3>
              <p className="text-sm text-gray-600 text-center">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
export default HomeSection