import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show an alert. Can be integrated with a service later
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "ariel7871@gmail.com",
      href: "mailto:ariel7871@gmail.com",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+972545506733",
      href: "tel:+972545506733",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Haifa, Israel",
      href: null,
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      href: "https://www.linkedin.com/in/arielburdan",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "GitHub",
      icon: "💻",
      href: "https://github.com/Ariel7871",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, projects, 
            or collaborations in IT infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  className={`card bg-gradient-to-r ${info.color} ${info.borderColor}`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-2xl">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`${social.color} text-white p-3 rounded-lg transition-colors duration-200 flex items-center space-x-2`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="card bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">⏰</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  Availability
                </h3>
              </div>
              <p className="text-gray-700 text-sm">
                Currently employed at NVIDIA as a Data Center Technician. 
                Open to discussing new opportunities and freelance projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="card">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-3 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Send Message</span>
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * This is a static form. For now, please use the email or phone contact methods above.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
