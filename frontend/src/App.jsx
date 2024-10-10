import React from 'react'
import './App.css'
import './index.css'
import Categories from './pages/Categories'
import Partners from './pages/Partners'
import Milestones from './pages/Milestones'
import Events from './pages/Events'
import Vision from './pages/Vision';
import Testimonials from './pages/Testimonials';
import Hero from './pages/Hero';
import Advantages from './pages/Advantages'

function App() {
  return (
    <div className="min-h-screen bg-black p-4">
      <Vision />
      <Milestones />
      
      <Categories />
      <Events />
      <Partners />
    </div>
  )
}

export default App
