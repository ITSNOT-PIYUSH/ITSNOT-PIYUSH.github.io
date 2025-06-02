'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'official.piyushmandal@gmail.com',
      href: 'mailto:official.piyushmandal@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: 'https://maps.google.com/?q=Bangalore,India',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ITSNOT-PIYUSH',
      color: 'hover:text-emerald-200',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/itz-piyush',
      color: 'hover:text-emerald-100',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/PIYUSHMANDALD11',
      color: 'hover:text-slate-300',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/id.piyush_/',
      color: 'hover:text-emerald-200',
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's collaborate on exciting projects and bring innovative ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 max-w-2xl mx-auto"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative projects, and 
                  potential collaborations. Whether you have a project in mind or just want 
                  to chat about AI/ML and technology, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-4 hover:glass-light transition-all duration-150 flex items-center space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 8 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-100/20 to-slate-400/20 group-hover:from-emerald-100/40 group-hover:to-slate-400/40 transition-all duration-150">
                      <info.icon className="w-6 h-6 text-emerald-200" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass rounded-xl ${social.color} transition-all duration-150`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center lg:text-left"
              >
                <motion.button
                  className="glass px-6 py-3 rounded-xl text-white font-semibold hover:glass-light transition-all duration-150 w-full sm:w-auto"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-slate-300/5 to-transparent rounded-full blur-3xl" />
    </section>
  )
}

export default Contact 