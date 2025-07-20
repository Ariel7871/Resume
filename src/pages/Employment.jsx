import { motion } from 'framer-motion'

const Employment = () => {
  const jobs = [
    {
      id: 1,
      title: "Data Center Technician",
      company: "Nvidia at Haifa",
      location: "Haifa, Israel",
      duration: "May 2024 - Present",
      responsibilities: [
        "Performed maintenance and troubleshooting on servers, networking devices, and storage systems to ensure smooth operation",
        "Monitored infrastructure health and performance to maintain maximum uptime and operational efficiency",
        "Installed, configured, and replaced hardware components as needed",
        "Kept accurate and up-to-date documentation of systems, incidents, and maintenance activities",
        "Collaborated cross-functionally with engineering and IT teams to resolve technical issues and optimize data center workflows"
      ],
      highlight: true
    },
    {
      id: 2,
      title: "IT Manager",
      company: "Darrow AI at Tel Aviv",
      location: "Tel Aviv, Israel",
      duration: "May 2023 - May 2024",
      responsibilities: [
        "Led IT operations, ensuring optimal network and system performance through proactive troubleshooting, patch management, and routine maintenance",
        "Managed and mentored the IT team, providing training and guidance to support growth and operational excellence",
        "Collaborated with product and engineering teams to align IT infrastructure with product roadmap and business goals",
        "Developed and implemented a technology strategy supporting scalability, security, and reliability",
        "Maintained up-to-date knowledge of emerging hardware, software, and networking technologies to inform decision-making",
        "Oversaw IT budget planning and cost optimization to maximize efficiency and ROI"
      ]
    },
    {
      id: 3,
      title: "IT Support Specialist",
      company: "Huuuge Games at Tel Aviv",
      location: "Tel Aviv, Israel",
      duration: "Oct 2022 - May 2023",
      responsibilities: [
        "Supported employee onboarding by installing software, configuring hardware, and managing user access and permissions (Windows, macOS, Active Directory, Google Workspace)",
        "Managed IT infrastructure at the company's Tel Aviv office, including network setup (Ubiquiti), CCTV systems, and coordination with building service providers",
        "Developed automation scripts and tools (PowerShell, Google Apps Script) to streamline internal workflows and reduce repetitive tasks",
        "Provided day-to-day technical support to local and remote staff, ensuring minimal downtime and rapid issue resolution using ticketing systems like Jira Service Desk"
      ]
    },
    {
      id: 4,
      title: "IT Support Specialist",
      company: "Oktopost at Tel Aviv",
      location: "Tel Aviv, Israel",
      duration: "Oct 2021 - Oct 2022",
      responsibilities: [
        "Served as the first IT professional in the company, leading the full setup and implementation of all IT systems and infrastructure from scratch",
        "Provided hands-on desktop support, created help desk tickets, and resolved technical issues across Windows and macOS environments",
        "Delivered onboarding and IT training sessions to new employees, improving user experience and reducing support overhead",
        "Collaborated with the R&D team to test new product features prior to release and assist in identifying bugs",
        "Led IT compliance efforts, managing certifications such as ISO 27001 and SOC 2",
        "Managed and integrated cloud services (e.g., Google Workspace, AWS, Azure) to support company operations",
        "Planned and deployed device management solutions including JAMF via Apple Business Manager (ABM)"
      ]
    },
    {
      id: 5,
      title: "IT Helpdesk Support",
      company: "Iscar at Tefen",
      location: "Haifa, Israel",
      duration: "Apr 2021 - Oct 2021",
      responsibilities: [
        "Analyzed and resolved user issues through technical expertise and structured troubleshooting",
        "Installed software updates and security patches to protect endpoints and maintain system stability",
        "Set up user accounts, configured workstations, and provided onboarding support for new employees"
      ]
    },
    {
      id: 6,
      title: "Helpdesk Technician",
      company: "IDF at Israel",
      location: "Israel",
      duration: "Aug 2018 - Apr 2021",
      responsibilities: [
        "User Identity Management",
        "Collaboration Specialist",
        "PC and Peripherals Support"
      ]
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            Employment History
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey in IT support, 
            infrastructure management, and data center operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 ${
                job.highlight ? 'ring-4 ring-blue-200' : ''
              }`}></div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className={`card ${job.highlight ? 'ring-2 ring-blue-200 bg-blue-50' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {job.company}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {job.location}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {job.highlight && (
                    <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                      <p className="text-blue-800 text-sm font-medium">
                        🎯 Current Position - Leading data center operations at NVIDIA
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-blue-50 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Achievement
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              <strong className="text-blue-600">Reduced support response times by up to 40%</strong>
            </p>
            <p className="text-gray-600">
              Through proactive maintenance, automation, and improved system reliability 
              across multiple organizations and environments.
            </p>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 max-w-2xl mx-auto relative overflow-hidden">
            {/* Confetti Animation */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {[...Array(15)].map((_, i) => {
                const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '🎆', '🎇']
                const randomEmoji = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)]
                const startX = Math.random() * 100 // Full width
                const startY = -50 - Math.random() * 20 // Start higher
                const endY = 150 + Math.random() * 30 // Fall through card
                
                return (
                  <motion.div
                    key={i}
                    className="absolute text-xl font-bold"
                    style={{
                      left: startX + '%',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                    initial={{ 
                      y: startY,
                      rotate: 0,
                      opacity: 1,
                      scale: 0.8
                    }}
                    animate={{ 
                      y: endY,
                      x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 60], // Horizontal drift
                      rotate: [0, 180, 360, 540],
                      opacity: [1, 1, 1, 0],
                      scale: [0.8, 1.2, 1, 0.6]
                    }}
                    transition={{
                      duration: 2.5 + Math.random() * 1, // 2.5-3.5 seconds
                      delay: Math.random() * 1, // 0-1 second delay
                      ease: "easeOut"
                    }}
                  >
                    {randomEmoji}
                  </motion.div>
                )
              })}
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center bg-white/30 backdrop-blur-sm rounded-lg p-2">
              <p className="text-lg text-gray-700 font-medium">
                Thanks for scrolling all the way down 🙂 I hope you enjoyed the journey through my experience!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Employment
