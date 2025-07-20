import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Education = () => {
  const [showLoadingText, setShowLoadingText] = useState(false)
  const [loadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    // Start loading animation, then show text after 1.5 seconds
    const timer = setTimeout(() => {
      setLoadingComplete(true)
      setTimeout(() => {
        setShowLoadingText(true)
      }, 300) // Small delay for smooth transition
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  const education = [
    {
      id: 1,
      title: "DevOps",
      institution: "DevOps Experts at Ramat Gan",
      duration: "Jun 2022 - Oct 2022",
      type: "Professional Course",
      description: "Completed a comprehensive DevOps course covering:",
      topics: [
        "CI/CD pipelines and automation tools (e.g., Jenkins, GitHub Actions)",
        "Containerization and orchestration with Docker & Kubernetes", 
        "Infrastructure as Code",
        "Cloud platforms and services (e.g., AWS, Azure basics)",
        "Linux fundamentals, monitoring, and security best practices"
      ],
      icon: "⚙️",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    }
  ]

  const courses = [
    {
      id: 1,
      title: "Strategic Thinking",
      provider: "Professional Development",
      icon: "🎯",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      id: 2,
      title: "Technical Support Fundamentals",
      provider: "Google",
      icon: "🛠️",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "Computer Networking",
      provider: "Google",
      icon: "🌐",
      color: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 bg-gray-50 min-h-screen"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in DevOps, 
            IT support, and emerging technologies.
          </p>
        </motion.div>

        {/* Animated Loading Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          {!loadingComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex justify-center items-center space-x-2">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-3">Loading knowledge...</span>
              </div>
              
              {/* School Bus Animation */}
              <div className="relative w-64 h-8 overflow-hidden">
                <motion.div
                  initial={{ x: -60 }}
                  animate={{ x: 320 }}
                  transition={{
                    duration: 5,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 transform -translate-y-1/2"
                >
                  <span className="text-3xl">🚌</span>
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {showLoadingText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 max-w-lg mx-auto"
            >
              <p className="text-lg text-gray-700 font-medium text-center">
                📘 Learning never stops – even while you're reading...
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Main Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Formal Education
          </h2>
          
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`card bg-gradient-to-r ${edu.color} ${edu.borderColor} max-w-4xl mx-auto`}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-sm">
                  <span className="text-3xl">{edu.icon}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600">
                        {edu.type}
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block bg-white text-gray-700 font-medium px-4 py-2 rounded-full shadow-sm">
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {edu.description}
                  </p>

                  <ul className="grid md:grid-cols-2 gap-3">
                    {edu.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Courses */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Courses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className={`card bg-gradient-to-r ${course.color} ${course.borderColor} text-center hover:scale-105 transition-transform duration-200`}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-3xl">{course.icon}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 font-medium">
                  {course.provider}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Continuous Learning
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Self-Directed Learning
                  </h4>
                  <p className="text-teal-600 font-medium">
                    Staying current with technology
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Continuously updating knowledge of emerging hardware, software, 
                and networking technologies through online resources and hands-on practice.
              </p>
            </div>

            <div className="card bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Practical Application
                  </h4>
                  <p className="text-amber-600 font-medium">
                    Real-world implementation
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Applied DevOps knowledge in production environments, 
                implementing CI/CD pipelines, containerization, and cloud technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Education
