import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './index.css'
import Categories from './pages/Categories'
import Partners from './pages/Partners'
import Milestones from './pages/Milestones'
import Milestones_Mobile from './pages/Milestones_Mobile'
import Events from './pages/Events'
import EventsMobile from './pages/Event_Mobile'
import Vision from './pages/Vision';
import Testimonials from './pages/Testimonials';
import Testimonials_Mobile from './pages/Testimonals_Mobile';
import CTA from './pages/CTA';
import HeroAndVisionSection from './pages/HeroAndVisionSection';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="min-h-screen bg-black p-4">
      <HeroAndVisionSection/>
      
      
      <Categories />
      {isMobile ? <EventsMobile /> : <Events />}

      <Testimonials />
      <Testimonials_Mobile/>
      <Partners />
      <CTA />
    </div>
  )
}

export default App
