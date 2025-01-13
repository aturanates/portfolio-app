'use client'

import React from 'react'
import { Calendar, Building } from 'lucide-react'

const experiences = [
  {
    title: "Project Engineer",
    company: "Institute of Defense Technologies",
    period: "Feb 2023 - Jul 2024",
    location: "Kocaeli, Turkey",
    responsibilities: [
      "Development of advanced software solutions for applications and UI development",
      "Creating Neural Networks and ML Algorithms using PyTorch",
      "Applied DSP techniques in various projects",
      "Designed and tested autonomous navigation systems",
      "Developed multi-sensor integration strategies"
    ]
  },
  {
    title: "Summer Intern",
    company: "Orion Innovation",
    period: "Jul 2023 - Sep 2023",
    location: "Istanbul, Turkey",
    responsibilities: [
      "Communication networks",
      "SIP communication",
      "Linux, Bash scripting",
      "C, C++ development"
    ]
  },
  {
    title: "Project Engineering Intern",
    company: "AGATE",
    period: "Feb 2023 - Mar 2024",
    location: "Kocaeli, Turkey",
    responsibilities: [
      "Machine & Deep Learning Operations",
      "Cloud Computing (AWS DynamoDB, SageMaker, S3)",
      "Embedded Software & Hardware (Sensor Integration)"
    ]
  }
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02] duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                  <Building className="h-4 w-4 ml-2" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="hover:text-gray-900 transition-colors duration-200">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

