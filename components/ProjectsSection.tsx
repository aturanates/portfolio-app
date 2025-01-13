'use client'

import React from 'react'

const projects = [
  {
    title: "Hand Gesture Recognition",
    description: "Using Micro Doppler Sensors for gesture recognition. Implemented advanced signal processing and machine learning techniques.",
    period: "Sep 2023 - Jun 2024",
    technologies: ["Signal Processing", "Machine Learning", "Sensor Integration", "Python"]
  },
  {
    title: "Dance Movement Classification",
    description: "Developed a movement classification system using IMU Sensors with real-time processing capabilities.",
    period: "Mar 2024 - May 2024",
    technologies: ["IMU Sensors", "Machine Learning", "Signal Processing", "PyTorch"]
  },
  {
    title: "Smart Agriculture IoT Project",
    description: "IoT-based solution for smart agriculture applications with sensor integration and cloud connectivity.",
    period: "Feb 2023 - Mar 2024",
    technologies: ["IoT", "AWS", "Sensors", "Cloud Computing"]
  },
  {
    title: "SDR FM Radio Receiver",
    description: "Implemented a software-defined radio system for receiving and processing FM radio broadcasts.",
    period: "Mar 2024 - May 2024",
    technologies: ["SDR", "Signal Processing", "Python", "DSP"]
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-blue-600">{project.period}</p>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

