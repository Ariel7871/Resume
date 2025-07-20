import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: "🔧",
      skills: [
        "System Integration",
        "Network Security", 
        "Budget Management",
        "Firewalls",
        "Operating Systems: Windows, macOS, Linux",
        "Mobile Device Management",
        "DevOps",
        "Endpoint Management"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        "JAMF/Jump Cloud",
        "Tools & Platforms",
        "Jira Service Desk",
        "Google Workspace",
        "Active Directory",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions"
      ]
    },
    {
      title: "DevOps & Automation",
      icon: "⚙️",
      skills: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Containerization (Docker & Kubernetes)",
        "Cloud Platforms (AWS, Azure)",
        "Linux Fundamentals",
        "Monitoring & Security",
        "PowerShell Scripting",
        "Google Apps Script"
      ]
    },
    {
      title: "Security, Infrastructure & Deployment",
      icon: "🔐",
      skills: [
        "Led physical office relocation and full IT re-deployment across departments",
        "Designed and implemented office-wide internet and internal network infrastructure",
        "Built new network architecture with firewalls, switches, VLANs, and secure Wi-Fi",
        "Managed large-scale MDM rollouts across multiple platforms (JAMF, Intune, JumpCloud, Meraki, Hexnode)",
        "Implemented and maintained Active Directory and Google Workspace SSO",
        "Oversaw ISO 27001 & SOC 2 compliance preparations and audits",
        "Wrote custom PowerShell & Google Apps Scripts for IT automation",
        "Managed onboarding/offboarding pipelines with auto-provisioning and revocation",
        "Created documentation and disaster recovery procedures for infrastructure",
        "Planned and executed cloud integrations (Google Workspace, Azure, AWS)"
      ]
    }
  ]

  const languages = [
    { name: "Hebrew", level: "Native", proficiency: 100 },
    { name: "Russian", level: "Native", proficiency: 100 },
    { name: "English", level: "Highly Proficient", proficiency: 95 },
    { name: "German", level: "Intermediate", proficiency: 50 }
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
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
            Skills & Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, tools, and languages 
            developed through years of hands-on experience in IT infrastructure and DevOps.
          </p>
        </motion.div>

        {/* Technical Skills Grid - First 3 categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security, Infrastructure & Deployment - Full Width Section */}
        {skillCategories.length > 3 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="max-w-5xl mx-auto">
              <motion.div className="card">
                <div className="flex items-center justify-center mb-8">
                  <span className="text-4xl mr-4">{skillCategories[3].icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {skillCategories[3].title}
                  </h3>
                </div>
                
                <motion.div
                  variants={containerVariants}
                  className="grid md:grid-cols-2 gap-3"
                >
                  {skillCategories[3].skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      className="flex items-start p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-800 text-sm leading-relaxed">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Languages
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {language.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {language.level}
                </p>
                
                {/* Proficiency bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${language.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                    className="bg-blue-600 h-2 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {language.proficiency}%
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="card bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    MDM Deployment at Scale
                  </h4>
                  <p className="text-purple-600 font-medium">
                    Implemented centralized MDM across 100+ Apple and Windows devices
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Using tools like JAMF, Intune, Meraki, and JumpCloud for secure and automated provisioning.
              </p>
            </div>

            <div className="card bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Security & Compliance
                  </h4>
                  <p className="text-red-600 font-medium">
                    Led ISO 27001 compliance process from zero to audit readiness
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Defined internal policies, implemented security controls, and automated documentation.
              </p>
            </div>

            <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Office Infrastructure & Migration
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Planned and executed a full IT migration for a new office site
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Including internet wiring, firewall setup, VLAN segmentation, and Wi-Fi for 100+ users.
              </p>
            </div>

            <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Automation & Efficiency
                  </h4>
                  <p className="text-green-600 font-medium">
                    Created custom PowerShell and bash scripts
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Reducing manual IT tasks and improving onboarding/offboarding time by over 50%.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills
