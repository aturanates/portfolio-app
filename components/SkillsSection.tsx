'use client'

import React from 'react'

const skills = {
  software: [
    'Python', 'C++', 'C#', 'C', 'MATLAB', '.NET', 'HTML', 'Simulink', 'Git', 'Linux',
    'ROS', 'Gazebo', 'Docker', 'AWS', 'PyTorch', 'TensorFlow', 'OpenCV', 'Flask', 'PyQt5', 'SQL'
  ],
  hardware: [
    'CAD/Altium', 'Multisim', 'EAGLE', 'Autodesk', 'PCB Design', 'HDL-Verilog', 'LtSpice',
    'IMU', 'UWB', 'Lidar'
  ],
  areas: [
    'Computer Vision', 'Machine Learning', 'Deep Learning', 'Autonomous Vehicles',
    'Control Systems', 'Digital Signal Processing', 'Sensor Fusion', 'UI Development'
  ]
}

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="space-y-16">
          {Object.entries({
            "Software": skills.software,
            "Hardware": skills.hardware,
            "Areas of Expertise": skills.areas
          }).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((skill, index) => (
                  <div key={index} 
                    className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg shadow-sm text-center transform hover:scale-105 transition-all duration-200 hover:shadow-md">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

