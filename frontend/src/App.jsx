import React from 'react'
import './App.css'
import './index.css'
import Categories from './pages/Categories'
import Partners from './pages/Partners'
import Milestones from './pages/Milestones'
import Events from './pages/Events'
function App() {
  return (
    <div className="min-h-screen bg-black p-4">
      <Milestones />
      <Categories />
      <Events />
      <Partners />
    </div>
  )
}

export default App
