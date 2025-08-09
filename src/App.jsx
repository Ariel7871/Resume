import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import ChatbaseWidget from './components/ChatbaseWidget'

const Home = lazy(() => import('./pages/Home'))
const Employment = lazy(() => import('./pages/Employment'))
const Skills = lazy(() => import('./pages/Skills'))
const Education = lazy(() => import('./pages/Education'))
const Contact = lazy(() => import('./pages/Contact'))
const Projects = lazy(() => import('./pages/Projects'))

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="py-16 text-center text-gray-600">Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <div className="min-h-screen bg-gray-50">
          <ChatbaseWidget />
          <Navbar />
          <main id="main" className="focus:outline-none">
            <AppRoutes />
          </main>
        </div>
      </Router>
    </MotionConfig>
  )
}

export default App
