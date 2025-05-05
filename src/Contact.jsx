

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from './Pages/Components/Navbar'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Thanks! Your message has been sent.');
    setName(''); setEmail(''); setMessage('');
  }

  return (
    <>
   
    <Navbar/>
    <section className="bg-gradient-to-br from-[#021174] via-[#000839] to-[#000839] min-h-screen flex items-center justify-center px-6 sm:px-12 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Contact Info */}
        <motion.div
          className="text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            Have questions or feedback? Drop us a line and we’ll get back to you soon.
          </p>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" />
              <a href="mailto:support@bloggingapp.com" className="hover:text-blue-300 transition">
                support@bloggingapp.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-400 mr-3" />
              <a href="tel:+1234567890" className="hover:text-blue-300 transition">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-400 mr-3" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-gray-200 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ahmed Hassan Awan"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1">Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1">Message</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
    </>
  );
}

