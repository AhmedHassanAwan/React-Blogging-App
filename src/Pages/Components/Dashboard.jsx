

import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import {  onAuthStateChanged } from "firebase/auth";
import { collection, addDoc , getDocs , query, where   } from "firebase/firestore"; 
import { auth , db  } from '../../Config';











export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [arr , setarr] = useState([])
  const widgetRef = useRef(null);
  const [username , setusername] = useState("")


  useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
      { cloudName: 'dwfxr62c6', uploadPreset: 'react blogging app' },
      (error, result) => {
        if (!error && result.event === 'success') {
          setImage(result.info.secure_url);
        }
      }
    );
    
onAuthStateChanged(auth, async(user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {

  setusername(doc.data().fullname)
  console.log(doc.data().fullname);

});


  } else {
    console.log("error");
  }
});
  }, []);

 async  function publishBlog(e) {
    e.preventDefault();
    console.log({ title, description, image });


    setTitle("")
    setDescription("")
    addDeta()
    Readdata()
    Allblogs()
}

/// Add Data
async function addDeta() {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
     title : title,
     description : description,
     image : image,
     uid : auth.currentUser.uid,
     
});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
}}


// Read data


async function Readdata() {

  try {

    const q = query(collection(db, "blogs"),  where("uid", "==", auth.currentUser.uid));
console.log(auth.currentUser.uid);
const blogData = [];

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

console.log("docdata ====> " ,   doc.data());
blogData.push(doc.data())

})

setarr(blogData)
    
} catch (error) {
    console.log(error);
}}







  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-[#021174] via-[#000839] to-[#000839] min-h-screen p-6 sm:p-12">
   
        <h1 className="text-3xl text-white font-bold mb-8">
       
<h2 className="text-3xl font-semibold">
  Hi <span className="wave-hand">👋</span> <p>Welcome back! Let's crush it today!</p>
</h2>
        </h1>

        {/* Create Blog Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12 max-w-3xl mx-auto">
          <h3 className="text-2xl text-white font-semibold mb-6">
            Create New Blog Post
          </h3>
          <form onSubmit={publishBlog} className="space-y-5">
            <div>
              <label className="block text-gray-200 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1">Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your blog description"
                required
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => widgetRef.current.open()}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
              >
                Upload Image
              </button>
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded-md border border-white/30"
                />
              )}
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition"
            >
              Publish Blog
            </button>
          </form><br />
        </div>


   
   
        <div className="max-w-6xl mx-auto px-4 py-10">
  <h3 className="text-3xl font-bold text-white mb-8 text-center">
    My Blogs
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {arr.map((item, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-5 hover:scale-105 transition-transform duration-300 border border-white/20"
      >
        <img
          src={item.image}
          alt="Blog"
          className="w-full h-70 object-cover rounded-xl mb-4 shadow-md"
        />
        <h2 className="text-white text-2xl font-semibold mb-2">
          {item.title}
        </h2>
        <p className="text-gray-300 text-sm mb-4">
          {item.description}
        </p>
      
      </div>
    ))}
  </div>
</div>

      </div>


     
    </>
  );
}

