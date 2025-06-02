'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Heart, Target, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeTab, setActiveTab] = useState('bio')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const funFacts = [
    { icon: GraduationCap, title: 'AIML Student', description: 'Pursuing specialization in Artificial Intelligence and Machine Learning' },
    { icon: Heart, title: 'Tech Passionate', description: 'Love building innovative solutions with cutting-edge technology' },
    { icon: Target, title: 'Goal-Oriented', description: 'Focused on creating AI that makes a positive impact on society' },
    { icon: Zap, title: 'Quick Learner', description: 'Always excited to explore new technologies and frameworks' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate about AI/ML with a vision to create intelligent solutions for tomorrow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Tab Navigation */}
              <div className="glass rounded-2xl p-2">
                <div className="flex space-x-1">
                  {[
                    { id: 'bio', label: 'Bio' },
                    { id: 'education', label: 'Education' },
                    { id: 'interests', label: 'Interests' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 px-4 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8"
              >
                {activeTab === 'bio' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
                    <p className="text-gray-300 leading-relaxed">
                      I'm Piyush Mandal, an AIML engineering student based in the vibrant tech hub of Bangalore. 
                      My journey into artificial intelligence began with a curiosity about how machines can learn 
                      and make decisions, which quickly evolved into a passion for creating intelligent systems.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Currently pursuing my specialization in AI/ML, I'm constantly exploring new frontiers in 
                      deep learning, natural language processing, and computer vision. I believe in the power 
                      of AI to solve real-world problems and make technology more accessible to everyone.
                    </p>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white mb-4">Academic Journey</h3>
                    <div className="space-y-3">
                      <div className="border-l-2 border-emerald-200 pl-4">
                        <h4 className="text-lg font-semibold text-white">AIML Engineering</h4>
                        <p className="text-gray-400">Specialization in Artificial Intelligence & Machine Learning</p>
                        <p className="text-sm text-gray-500">Currently Pursuing</p>
                      </div>
                      <div className="border-l-2 border-slate-400 pl-4">
                        <h4 className="text-lg font-semibold text-white">Online Certifications</h4>
                        <p className="text-gray-400">Deep Learning, TensorFlow, PyTorch, Data Science</p>
                        <p className="text-sm text-gray-500">Coursera, edX, Udacity</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'interests' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white mb-4">What Drives Me</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-white">Technical</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>• Neural Networks</li>
                          <li>• Computer Vision</li>
                          <li>• NLP & LLMs</li>
                          <li>• MLOps</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-white">Personal</h4>
                        <ul className="text-gray-300 space-y-1">
                          <li>• Open Source</li>
                          <li>• Tech Blogging</li>
                          <li>• Innovation</li>
                          <li>• Mentoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Fun Facts Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left">
                Fun Facts About Me
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-xl p-6 hover:glass-light transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-100/20 to-slate-400/20 group-hover:from-emerald-100/30 group-hover:to-slate-400/30 transition-all duration-300">
                        <fact.icon className="w-6 h-6 text-emerald-200" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">{fact.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{fact.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-emerald-100/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-slate-300/5 to-transparent rounded-full blur-3xl" />
    </section>
  )
}

export default About

 