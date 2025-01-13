'use client'

import React from 'react'
import { Menu, Github, Linkedin, Mail, ExternalLink, Calendar, Building } from 'lucide-react'
import Header from './Header'
import HeroSection from './HeroSection'
import ExperienceSection from './ExperienceSection'
import ProjectsSection from './ProjectsSection.tsx'
import SkillsSection from './SkillsSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Portfolio

