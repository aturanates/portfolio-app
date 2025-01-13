'use client'

import React from 'react'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white to-gray-50 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Turan Ates
        </h1>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-gray-900 hover:underline decoration-blue-500 decoration-2 underline-offset-8 transition-all">About</a>
          <a href="#experience" className="text-gray-700 hover:text-gray-900 hover:underline decoration-blue-500 decoration-2 underline-offset-8 transition-all">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 hover:underline decoration-blue-500 decoration-2 underline-offset-8 transition-all">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-gray-900 hover:underline decoration-blue-500 decoration-2 underline-offset-8 transition-all">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 hover:underline decoration-blue-500 decoration-2 underline-offset-8 transition-all">Contact</a>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </nav>
    </header>
  )
}

export default Header

