


// import {  useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {  signInWithEmailAndPassword } from "firebase/auth";

// import { auth } from "../Config.js";




// export default function Login() {

//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   let navigate = useNavigate()


//   function submit(e) {
//     e.preventDefault();
//     console.log(email, password);

    
// signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//   // Signed in 
//   const user = userCredential.user;
//   console.log(user);


// //   navigate('/Home')
  
// })
// .catch((error) => {
//   const errorMessage = error.message;
//   console.log(errorMessage);
  
// });



//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#10156e] via-[#070d5f] to-[#011257]">
//       <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-[#06165f] border border-blue-800/30">
//         <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
//         Login Account
//         </h2>

//         <form onSubmit={submit} className="space-y-5">
         
         

//           <div>
//             <label className="text-blue-300 text-sm block mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               className="w-full px-4 py-2 rounded-md bg-[#0f172a] text-white border border-blue-800/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-blue-300 text-sm block mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               className="w-full px-4 py-2 rounded-md bg-[#0f172a] text-white border border-blue-800/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

    
//           <button onClick={submit} type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-500 transition duration-200 rounded-md text-white font-semibold">login  Account </button>

//           <p className="text-center text-sm text-blue-300 mt-6"> Don’t have an account? {" "}
//           <span  onClick={()=> navigate("/Register")}   className="text-blue-400 underline cursor-pointer">Sign Up</span></p>

//         </form>

     
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config.js";

// Icons
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    console.log(email, password);
         setLoading(true); 

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Login sucessfully ")
        console.log( "user uid =====>" ,  user.uid);
        navigate("/Home");
         setLoading(false); 
      })
      .catch((error) => {
        console.log(error.message);
        alert("please correct email or passward !")
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#10156e] via-[#070d5f] to-[#011257]">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-[#06165f] border border-blue-800/30">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Login Account
        </h2>

        <form onSubmit={submit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <label className="text-blue-200 text-sm font-medium block mb-1">
              Email
            </label>
            <div className="flex items-center bg-[#0f172a] rounded-md border border-blue-800/40">
              <span className="px-3 text-blue-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full px-2 py-2 bg-transparent text-white focus:outline-none"
                placeholder="e.g. you@example.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-blue-200 text-sm font-medium block mb-1">
              Password
            </label>
            <div className="flex items-center bg-[#0f172a] rounded-md border border-blue-800/40">
              <span className="px-3 text-blue-400">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full px-2 py-2 bg-transparent text-white focus:outline-none"
            placeholder="Enter a secure password"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
  type="submit"
  disabled={loading}
  className={`w-full py-2 rounded-md font-semibold text-white transition ${
    loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
  }`}
>
  {loading ? 'Loging  Account...' : 'Loging Account '}
</button>

          <p className="text-center text-sm text-blue-300 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/Register")}
              className="text-blue-400 underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
