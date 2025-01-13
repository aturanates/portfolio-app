'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Turan Ates. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

