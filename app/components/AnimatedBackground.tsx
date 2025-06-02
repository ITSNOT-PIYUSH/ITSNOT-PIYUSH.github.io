'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-90" />
      
      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-100/20 to-slate-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-slate-200/20 to-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-50/20 to-slate-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-slate-300/20 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Particle effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-100/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(248, 246, 244, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 246, 244, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

export default AnimatedBackground 