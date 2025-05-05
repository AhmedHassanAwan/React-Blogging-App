




import React, { useEffect } from 'react'
import Navbar from './Pages/Components/Navbar'
import HeroSection from './Pages/Components/HeroSection'
import Card from './Pages/Components/Card'
import Allcard from './Pages/Components/Allcard'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Config'; // ✅ fix the path
import { useNavigate } from 'react-router-dom'





function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User ID Home page ===>:", user.uid);

    } else {
navigate('/')
      console.log("User not logged in");
    }
  });

  },[])
  return (
    <>

    <Navbar/>
    <HeroSection/>
    <Card/>
    <Allcard/>

    </>
  )
}

export default App