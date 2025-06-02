'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState('technical')

  const skillCategories = {
    technical: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'TensorFlow', level: 85, icon: '🧠' },
      { name: 'PyTorch', level: 80, icon: '🔥' },
      { name: 'Machine Learning', level: 88, icon: '🤖' },
      { name: 'Deep Learning', level: 82, icon: '🧬' },
      { name: 'Computer Vision', level: 75, icon: '👁️' },
      { name: 'NLP', level: 78, icon: '💬' },
      { name: 'Data Science', level: 85, icon: '📊' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 85, icon: '🔧' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'Jupyter', level: 90, icon: '📓' },
      { name: 'VS Code', level: 88, icon: '💻' },
      { name: 'Linux', level: 75, icon: '🐧' },
      { name: 'AWS', level: 65, icon: '☁️' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
      { name: 'PostgreSQL', level: 72, icon: '🐘' },
    ],
  }

  const CircularProgress = ({ skill, index }: { skill: any, index: number }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setProgress(100)
        }, index * 100)
        return () => clearTimeout(timer)
      }
    }, [inView, index])

    const circumference = 2 * Math.PI * 40
    const strokeDasharray = circumference
    const strokeDashoffset = 0

    return (
      <motion.div
        className="relative w-32 h-32 flex items-center justify-center cursor-pointer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.15, y: -8 }}
      >
        <svg className="w-full h-full transform -rotate-90 transition-transform duration-100 hover:scale-105" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#808080" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl mb-1 transition-transform duration-100 hover:scale-125">{skill.icon}</span>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building AI-powered solutions and data science applications
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="glass rounded-2xl p-2 relative z-50">
              <div className="flex space-x-1 relative z-50">
                {[
                  { id: 'technical', label: 'AI/ML' },
                  { id: 'tools', label: 'Tools' },
                ].map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-100 cursor-pointer relative z-50 block w-full hover:scale-110 ${
                      activeCategory === category.id
                        ? 'bg-emerald-50/15 text-white'
                        : 'text-gray-400 hover:text-emerald-200 hover:bg-emerald-50/10'
                    }`}
                    style={{ pointerEvents: 'all', minWidth: '100px' }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === 'technical' ? (
              // Circular Progress for Technical Skills
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                {skillCategories.technical.map((skill, index) => (
                  <div key={skill.name} className="text-center">
                    <CircularProgress skill={skill} index={index} />
                    <p className="text-white font-medium mt-3">{skill.name}</p>
                  </div>
                ))}
              </div>
            ) : activeCategory === 'tools' ? (
              // Circular Progress for Tools (same as technical)
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                {skillCategories.tools.map((skill, index) => (
                  <div key={skill.name} className="text-center">
                    <CircularProgress skill={skill} index={index} />
                    <p className="text-white font-medium mt-3">{skill.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-white">
                <p>Category not found: {activeCategory}</p>
              </div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest 
                technologies in AI/ML and data science. Currently exploring advanced topics 
                in large language models, generative AI, and MLOps practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-emerald-100/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-slate-300/5 to-transparent rounded-full blur-3xl" />
    </section>
  )
}

export default Skills 