






import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from '../../Config.js';

function Allcard() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User ID:", user.uid);
     
        
        fetchAllBlogs(); 
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  async function fetchAllBlogs() {
    const allBlogs = [];
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      allBlogs.push(doc.data());
      console.log(allBlogs);
      

    });
    setArray(allBlogs);
  }

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-10">
    <h3 className="text-3xl font-bold text-white mb-8 text-center">
      My Blogs
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {array.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-5 hover:scale-105 transition-transform duration-300 border border-white/20"
        >
          <img
            src={item.image}
            alt="Blog"
            className="w-full h-90 object-cover rounded-xl mb-4 shadow-md"
          />
          <h2 className="text-gray-3000 text-2xl font-semibold mb-2">
            {item.title}
          </h2>
          <p className="text-gray-3000 text-sm mb-4">
            {item.description}
          </p>
        
        </div>
      ))}
    </div>
  </div>
  
      
  );
}

export default Allcard;




