import { motion } from 'framer-motion'

const Projects = () => {
  const realProjects = [
    {
      id: 1,
      title: "Licenovo – SaaS License Management Platform",
      description: "AI-powered SaaS platform for managing enterprise application usage and licenses. Designed MVP architecture and built a modern dashboard with user auth, cloud integration, and cost optimization logic.",
      technologies: ["React", "FastAPI", "PostgreSQL", "Google Cloud", "Resend"],
      status: "Completed MVP",
      icon: "🚀",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Building Committee Manager",
      description: "App platform for managing shared residential buildings. Handles tenants, payments, shift schedules, maintenance logs, and communication between residents and admins.",
      technologies: ["React", "Mantine", "Supabase", "Tailwind", "Framer Motion"],
      status: "In Development",
      icon: "🏠",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
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
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world projects that demonstrate my expertise in 
            full-stack development, infrastructure automation, and enterprise solutions.
          </p>
        </motion.div>

        {/* Featured Projects Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-center mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">💼</span>
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-700">
            These projects showcase my ability to design and build enterprise-grade solutions 
            from concept to deployment, combining technical expertise with business value.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {realProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`card bg-gradient-to-r ${project.color} ${project.borderColor} hover:scale-105 transition-transform duration-200`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-2xl">{project.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-white text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-white text-gray-600 text-xs font-medium px-2 py-1 rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-700 mb-6">
              I'm always open to discussing new projects, innovative ideas, 
              or opportunities to contribute to exciting initiatives in IT infrastructure and DevOps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ariel7871@gmail.com"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Get In Touch</span>
              </a>
              <a
                href="/contact"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Contact Form</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects
