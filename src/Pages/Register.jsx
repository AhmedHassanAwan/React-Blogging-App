


import { useEffect, useRef, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { FaUser, FaEnvelope, FaLock, FaUpload, FaCheck } from "react-icons/fa";
import { auth , db } from "../Config.js";
import { useNavigate } from "react-router-dom";


export default function Register() {

const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [username, setusername] = useState("");
const [image , setimage] = useState("")
const [useruid , setuseruid] = useState("")
const [loading, setLoading] = useState(false);


let  nevigate = useNavigate()
let  widgetRef = useRef(null);


// let Picurl = "";  
useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
    {
        cloudName: "dwfxr62c6",
        uploadPreset: "react blogging app",
    },
    (error, result) => {
        if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        // Picurl = result.info.secure_url;  
        setimage(result.info.secure_url)
        console.log(image);
        
        }
    }
    );
}, []);




function submit(e) {
    e.preventDefault();
    console.log(email, password, username);
     setLoading(true); 

createUserWithEmailAndPassword(auth, email, password)
.then(async (userCredential) => {
const user = userCredential.user;
console.log(user);

try {
  const docRef = await addDoc(collection(db, "users"), {
    email: email,
    fullname: username,
    password: password,
    useruid: user.uid, 
    iamge: image
  });
  console.log("Document written with ID: ", docRef.id);
  alert("sign up sucess fully ")
} catch (e) {
  console.error("Error adding document: ", e);
  alert("please correct passwaord ")
}
  setLoading(false); 

nevigate('/');
})

.catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage)
    

});

}


return (
    <div>

    {/* </div> */}

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#10156e] via-[#070d5f] to-[#011257]">
<div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-[#06165f] border border-blue-800/30">
    <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
    Create Account
    </h2>

    <form onSubmit={submit} className="space-y-6">
    {/* Username */}
    <div className="relative">
        <label className="text-blue-200 text-sm font-medium block mb-1">
        Username
        </label>
        <div className="flex items-center bg-[#0f172a] rounded-md border border-blue-800/40">
        <span className="px-3 text-blue-400"><FaUser /></span>
        <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="w-full px-2 py-2 bg-transparent text-white focus:outline-none"
            placeholder="Ahmed Hssan Awan"
            required
        />
        </div>
    </div>

    {/* Email */}
    <div className="relative">
        <label className="text-blue-200 text-sm font-medium block mb-1">
        Email
        </label>
        <div className="flex items-center bg-[#0f172a] rounded-md border border-blue-800/40">
        <span className="px-3 text-blue-400"><FaEnvelope /></span>
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
        <span className="px-3 text-blue-400"><FaLock /></span>
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

    {/* Upload Button */}
    <button
        type="button"
        className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-blue-500 hover:bg-blue-400 transition text-white font-medium"
        onClick={() => widgetRef.current && widgetRef.current.open()}
    >
        <FaUpload /> Upload Profile Image
    </button>

    {/* Submit */}
  <button
  type="submit"
  disabled={loading}
  className={`w-full py-2 rounded-md font-semibold text-white transition ${
    loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
  }`}
>
  {loading ? 'Signing Up...' : 'Sign Up'}
</button>


    <p className="text-center text-sm text-blue-300 mt-6">
        Already have an account?{" "}
        <span
        onClick={() => nevigate('/')}
        className="text-blue-400 underline cursor-pointer"
        >
        Login here
        </span>
    </p>
    </form>
</div>
</div>
</div>


)
}































































