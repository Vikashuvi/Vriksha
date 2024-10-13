import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './index.css'
import Categories from './pages/Categories'
import Partners from './pages/Partners'

import Events from './pages/Events'
import EventsMobile from './pages/Event_Mobile'

import Testimonials from './pages/Testimonials';
import Testimonials_Mobile from './pages/Testimonals_Mobile';
import CTA from './pages/CTA';
import HeroAndVisionSection from './pages/HeroAndVisionSection';
import Advantages from './pages/Advantages'

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="min-h-screen bg-black p-4">
      <HeroAndVisionSection/>
      
      
      <Categories />
      <Advantages/>
      {isMobile ? <EventsMobile /> : <Events />}

      <Testimonials />
      <Testimonials_Mobile/>
      <Partners />
      <CTA />
    </div>
  )
}

export default App
