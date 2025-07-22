import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import ChatbaseWidget from './components/ChatbaseWidget'
import Home from './pages/Home'
import Employment from './pages/Employment'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ChatbaseWidget />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
