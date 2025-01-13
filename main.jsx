import React from 'react';
import { Menu, Github, Linkedin, Mail, ExternalLink, Calendar, Building } from 'lucide-react';

const Portfolio = () => {
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
  ];

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
  ];

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
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

      {/* Skills Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Turan Ates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;