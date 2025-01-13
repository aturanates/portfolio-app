'use client'

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text">
            Hello, I'm Turan Ates
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Electronics and Software Engineer
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate engineer focused on Software Development, Computer Vision, AI, and Digital Signal Processing. 
            I'm dedicated to leveraging technology to solve real-world challenges.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/aturanates" target="_blank" rel="noopener noreferrer" 
              className="transform hover:scale-110 transition-transform duration-200">
              <Github className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            </a>
            <a href="https://www.linkedin.com/in/aturanates/" target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200">
              <Linkedin className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            </a>
            <a href="mailto:aturanatess@gmail.com"
              className="transform hover:scale-110 transition-transform duration-200">
              <Mail className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

