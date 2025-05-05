


import React from 'react';
import Navbar from './Components/Navbar'
import heroImage from '../assets/b-image.webp'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate("")
  return (
    <>
   
    <Navbar/>
 
    <section className="bg-gradient-to-br from-[#021174] via-[#000839] to-[#000839] min-h-screen flex items-center justify-center px-6 sm:px-12 overflow-hidden">
  <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-16">
    
   
     {/* Left Contact Info */}
            <motion.div
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
    <div className="text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
        <span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{
            animation: 'textGlow 2s ease-in-out infinite alternate'
          }}
        >
          About 
        </span>{' '}
        <span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          style={{
            animation: 'textGlow 2s ease-in-out infinite alternate 0.5s'
          }}
        >
          Our Platform
        </span>
      </h1>
      
      <div className="space-y-6 text-lg text-gray-300 max-w-lg">
        <p className="hover:text-blue-300 transition-colors duration-300">
          We're changing how people share and discover ideas around the world. 
          This platform connects thinkers, creators, and curious minds in a vibrant space 
          for sharing and learning.
        </p>

        <p className="text-blue-400 italic text-sm">
          — Created by <strong>Ahmed Hassan Awan</strong>
        </p>

        <div className="pl-4 border-l-4 border-blue-500/50 hover:border-blue-400 transition-all duration-500">
          <p className="font-medium">Our Mission:</p>
          <p>To empower every voice and amplify meaningful conversations that drive change.</p>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            <span>150,000+ active creators</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            <span>5 million monthly readers</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            <span>90+ countries represented</span>
          </li>
        </ul>
      </div>

      <div className="mt-10 flex gap-4">
        <button 
          onClick={() => navigate('/Dashboard')}
          className="border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-blue-500/20"
        >
          Join Our Community
        </button>
      </div>
    </div>
    </motion.div>

    {/* Right Image with CSS Animation */}
      <motion.form
          
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
    <div className="relative">
      <img
        src={heroImage}
        alt="Team collaborating on ideas"
        className="w-full max-w-2xl rounded-2xl shadow-2xl relative z-10"
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-blue-400/30"
        style={{
          animation: 'pulse 4s ease-in-out infinite alternate'
        }}
      ></div>
    </div>
  </motion.form>
  </div>

  {/* CSS Animations */}
  <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    @keyframes pulse {
      0% { opacity: 0.3; transform: scale(0.98); }
      100% { opacity: 0.1; transform: scale(1.02); }
    }
    @keyframes textGlow {
      0% { text-shadow: 0 0 5px rgba(34, 211, 238, 0.3); }
      100% { text-shadow: 0 0 15px rgba(96, 165, 250, 0.5); }
    }
  `}</style>
</section>


    </>
  );
};

export default About;
