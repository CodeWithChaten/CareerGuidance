import { useState } from 'react'
import reactLogo from './assets/react.svg'
import image from './assets/image.jpeg'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeSection from './pages/Home'


function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <NavBar />
      <main className="flex-grow p-0 w-full">
        <HomeSection/>
      </main>
      <Footer />
    </div>
  );
}

export default App
