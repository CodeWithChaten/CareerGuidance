import { useState } from 'react'
import reactLogo from './assets/react.svg'
import image from './assets/image.jpeg'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeSection from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import GetGuidencePage from './pages/GetGuidence'
import InterestSelectionPage from './pages/InterestSelection'
import QuizPage from './pages/Quiz'
import CareerGuidancePage from './pages/CareerGuidance'


function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen w-full flex flex-col">
      <NavBar />
      <main className="flex-grow p-0 w-full">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/getguidance" element={<GetGuidencePage />} />
          <Route path="/interests" element={<InterestSelectionPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/career-guidance" element={<CareerGuidancePage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App
