'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Eye, Code, Filter } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects = [
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Chatbot',
      category: 'ai-ml',
      description: 'Intelligent conversational AI using transformer architecture',
      fullDescription: 'Built a sophisticated chatbot using state-of-the-art transformer models with natural language understanding capabilities. Implemented context awareness, sentiment analysis, and multi-turn conversation handling.',
      tech: ['Python', 'Transformers', 'Flask', 'React'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/ITSNOT-PIYUSH',
      featured: true,
    },
    {
      id: 'image-classifier',
      title: 'Deep Learning Image Classifier',
      category: 'ai-ml',
      description: 'CNN-based image classification with 95% accuracy',
      fullDescription: 'Developed a robust image classification system using convolutional neural networks. Achieved 95% accuracy on custom dataset with data augmentation and transfer learning techniques.',
      tech: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/ITSNOT-PIYUSH/image-classifier',
      featured: true,
    },
    {
      id: 'stock-predictor',
      title: 'Stock Price Predictor',
      category: 'ai-ml',
      description: 'LSTM-based stock market prediction with sentiment analysis',
      fullDescription: 'A comprehensive stock analysis and portfolio management tool built with LSTM networks for price prediction. Features real-time data visualization, technical indicators, AI-powered sentiment analysis using FinBERT, and portfolio management capabilities.',
      tech: ['Python', 'TensorFlow', 'Streamlit', 'FinBERT', 'Plotly'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/ITSNOT-PIYUSH/stock_prediction',
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const isExpanded = expandedProject === project.id

    return (
      <motion.div
        layout
        className={`glass rounded-2xl overflow-hidden hover:glass-light transition-all duration-100 group ${
          isExpanded ? 'md:col-span-2' : ''
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -12, scale: 1.05 }}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-500/20 to-gray-700/20">
          <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 group-hover:scale-110"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-100 group-hover:bg-black/70"></div>
          {project.featured && (
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-gradient-to-r from-white to-gray-300 text-black px-3 py-1 rounded-full text-xs font-bold">
                Featured
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex items-center justify-center z-10">
            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 rounded-full hover:bg-white/50 transition-all duration-100 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  console.log('Overlay GitHub link clicked:', project.github)
                  // Let the default behavior happen
                }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-100">
              {project.title}
            </h3>
            <button
              onClick={() => setExpandedProject(isExpanded ? null : project.id)}
              className="p-1 text-gray-400 hover:text-white transition-colors duration-100"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {isExpanded ? project.fullDescription : project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/25 transition-all duration-100 hover:scale-110"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-100 cursor-pointer hover:scale-110"
                onClick={(e) => {
                  console.log('GitHub link clicked:', project.github)
                  // Let the default behavior happen
                }}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </a>
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              {project.category === 'ai-ml' ? 'AI/ML' : 'Web Dev'}
            </span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my work in artificial intelligence and machine learning
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="glass rounded-2xl p-2">
              <div className="flex space-x-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    <span>{category.label}</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Want to Collaborate?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always excited to work on innovative projects and explore new technologies. 
                Let's build something amazing together!
              </p>
              <motion.button
                className="glass px-8 py-4 rounded-full text-white font-semibold hover:glass-light transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Get In Touch
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-gray-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-transparent rounded-full blur-3xl" />
    </section>
  )
}

export default Projects 