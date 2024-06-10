import { useState } from 'react'
import Home from './components/Home';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <>
    <Router>

      <div className="container">
        <nav className='navbar navbar-expand'>
          <div className='d-flex'>
            <NavBar />
          </div>
        </nav>

   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      </Router>
  
    </>
  )
}

export default App
