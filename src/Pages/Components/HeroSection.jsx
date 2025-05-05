


import React from 'react';
import heroImage from '../../assets/b-image.webp'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {

  const navigate = useNavigate()
  return (
    <section className="bg-gradient-to-br from-[#021174] via-[#000839] to-[#000839] min-h-screen flex items-center justify-center px-6 sm:px-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">
        
       {/* Left Contact Info */}
                  <motion.div
                    className="text-white space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
        <div className="text-white transition-all duration-500 ease-in-out">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Show Your</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ideas in Public</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Join a global community of thinkers and creators.<br />
            Explore ideas that inform, inspire, and ignite change.<br />
            Every blog is a voice — yours could be the next.
          </p>
          <div className="flex gap-4">
            {/* <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95">
              Login
            </button> */}
            <button  onClick={()=> navigate('/Dashboard')}   className="border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95">
              Create Blog Post
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
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Creative people discussing ideas"
            className="w-full max-w-2lg rounded-2xl shadow-2xl transition-transform duration-500 ease-in-out hover:-translate-y-2"
            />
        </div>

        </motion.form>
      </div>
    </section>
  );
};

export default HeroSection;