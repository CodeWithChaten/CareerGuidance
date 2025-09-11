const Footer = () => {
  return (
    <footer className="w-screen bg-gray-800 text-white mt-auto">
        <div className="w-full py-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © 2025 EduGuide. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">Privacy Policy</a>
            <a href="#terms" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">Terms of Service</a>
            <a href="#cookies" className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">Cookie Policy</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
