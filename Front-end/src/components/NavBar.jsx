import { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#ffffff] shadow-md">
      <div className="text-2xl font-bold text-black tracking-wide">EduGuide</div>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        <a href="/" className="text-black font-medium text-lg hover:text-blue-500 transition-colors">Home</a>
        <a href="/about" className="text-black font-medium text-lg transition-colors">About</a>
        <a href="/contact" className="text-black font-medium text-lg transition-colors">Contact</a>
        <div className="px-4 py-2 bg-[#16e1c0] rounded-full hover:bg-[#308ba4a8] transition-colors">
          <a href="/login" className="text-black font-medium text-lg transition-colors border-b border-transparent hover:border-blue-500">SignUp</a>
        </div>
      </nav>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus:ring-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span 
          className="block w-7 h-0.5 bg-gray-800 mb-1.5 rounded transition-all duration-300" 
          style={{transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none'}}
        ></span>
        <span 
          className={`block w-7 h-0.5 bg-gray-800 mb-1.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        ></span>
        <span 
          className="block w-7 h-0.5 bg-gray-800 rounded transition-all duration-300" 
          style={{transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'}}
        ></span>
      </button>
      
      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 right-0 h-full w-60 bg-[#51da9305] shadow-2xl flex flex-col p-6 gap-6 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex items-center justify-between mb-4">
          {/* <span className="text-xl font-bold text-black">EduGuide</span> */}
          <button 
            className="text-4xl text-black focus:outline-none transition-colors" 
            onClick={() => setMenuOpen(false)} 
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <a 
          href="#home" 
          className="text-shadow-gray-900 font-medium text-lg pb-1 transition-colors" 
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a 
          href="#about" 
          className="text-shadow-gray-900 font-medium text-lg pb-1 transition-colors" 
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a 
          href="#contact" 
          className="text-gray-900 font-medium text-lg transition-colors" 
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
      
      {/* Backdrop */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-transparent bg-opacity-80 z-10 md:hidden" 
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default NavBar
