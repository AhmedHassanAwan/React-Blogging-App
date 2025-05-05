

import { useEffect, useState } from "react";
import { auth, db } from "../../Config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import logo from '../../assets/blog png.png'





export default function Navbar() {
  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()





  function Logoutpage() {


    console.log("hellwo logout page");


    signOut(auth).then(() => {
      console.log("Sign-out successful.");

      navigate('/')
    }).catch((error) => {
      console.log(error);
      
      // An error happened.
    });
    
    
    
  }



  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(" User logged in:", user.uid);
        try {
          const q = query(collection(db, "users"), where("useruid", "==", user.uid));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(" User Data:", data);
            setUserData(data);
          });
        } catch (error) {
          console.error(" Error fetching user data:", error);
        }
      } else {
        console.log("User is signed out.");
        setUserData(null);
      }
    });

  }, []);



//   return (
//     <nav className="bg-gradient-to-r from-[#021174] to-[#000839] shadow-xl border-b border-blue-500/20">
//       <div className="max-w-7xl mx-auto px-5 sm:px-5 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               className="h-10 w-10 rounded-full"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//               alt="Logo"
//             />
//             <span className="text-white font-bold text-lg ml-2">MySite</span>
//           </div>


//           <ul className="hidden md:flex space-x-6 text-white font-medium">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>

//           {/* Right - Profile */}
//           <div className="flex items-center gap-4">
//             {userData ? (
//               <>
//                 <img
//                   src={userData.iamge}
//                   alt="Profile"
//                   className="w-15 h-15 rounded-full border-2 border-blue-300 object-cover"
//                 />
//                 <div className="text-smm">
//                   <h2 className="font-semibold text-white">{userData.fullname}</h2>
//                 </div>
//                 <button
             
//                   className="ml-4 px-3 py-1 rounded-md bg-red-600 hover:bg-red-500 text-white text-sm"
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               <div className="text-sm text-blue-200">Loading user...</div>
//             )}

//             {/* Mobile Toggle */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? (
//                 <XMarkIcon className="h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <ul className="md:hidden px-4 pb-4 space-y-2 text-white font-medium">
//           <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
//           <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );

return (
    <nav className="bg-gradient-to-r from-[#021174] to-[#000839] shadow-xl  border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="h-15 w-15 rounded-full border-2 border-blue-400/50 shadow-md"
              src={logo}
              alt="Logo"
            />
            <span className=" font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
            BlogNest
            </span>
          </div>
  
                                         {/* Desktop Navigation   */}


          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/Home" 
                className="text-blue-200 hover:text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-blue-900/30"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className="text-blue-200 hover:text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-blue-900/30"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/Contact" 
                className="text-blue-200 hover:text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-blue-900/30"
              >
                Contact
              </Link>
            </li>
          </ul>
  
          {/* Right - Profile */}
          <div className="flex items-center gap-4">
            {userData ? (
              <>
                <div className="hidden md:flex items-center space-x-3 bg-blue-900/30 px-4 py-1 rounded-full border border-blue-500/20">
                  <img
                   src={userData.iamge}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-300 object-cover"
                  />
             
                  <div className="text-sm">
                    <h2 className="font-semibold text-white">{userData.fullname}</h2>
                  </div>
                </div>
                <button  onClick={Logoutpage}
                  className="hidden md:block ml-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-medium shadow-md hover:shadow-red-500/30 transition-all duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="text-sm text-blue-200">Loading user...</div>
            )}
  
            {/* Mobile Toggle */}
            <button
              className="md:hidden text-blue-200 hover:text-white p-1 rounded-md hover:bg-blue-900/30 transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-blue-900/20 rounded-lg mt-2 border border-blue-500/20">
            <ul className="space-y-2">
              <li> <Link  to="/Home"  onClick={() => setMenuOpen(false)}  className="block px-3 py-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-900/30 transition-all duration-200"> Home</Link> </li>
              <li>
                <Link 
                  to="/About" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-900/30 transition-all duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/Contact" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-900/30 transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {userData && (
              <div className="pt-4 mt-4 border-t border-blue-500/20">
                <div className="flex items-center px-3 space-x-3">
                  <img
                   src={userData.iamge}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-300 object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-white">{userData.fullname}</h2>
                    <button   onClick={Logoutpage}
                      className="mt-2 px-3 py-1 rounded-md bg-red-600 hover:bg-red-500 text-white text-sm w-full transition-all duration-200"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );


}











// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ratione?