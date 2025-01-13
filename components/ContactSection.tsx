'use client'

import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:aturanatess@gmail.com" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200">
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/aturanates/" target="_blank" rel="noopener noreferrer" 
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-lg hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-200">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

