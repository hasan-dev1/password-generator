import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const SignUp = () => {
   const [handlepassshow, setHandlepassshow] = useState(false);
   const {handleCreatingUser} = useContext(AuthContext)
   const navigate = useNavigate()

   const passtext = document.getElementById("password");
   const handlepasstext = () => {
     if (passtext?.type === "password") {
       passtext.type = "text";
     } else if (passtext?.type === "text") {
       passtext.type = "password";
     }
   };

   const handleSignup = (e) => {
     e.preventDefault();
     const form = e.target;

     const email = form.email.value;
     const password = form.password.value;

     handleCreatingUser(email, password)
     .then((result) => {
       navigate('/')
     });

   };
   return (
     <div className="mt-16 w-1/2 mx-auto min-h-[50vh]">
       <div className="p-12 bg-[#7d808346]">
         <h3 className="text-3xl font-bold text-center pb-6">SignUp</h3>
         <form onSubmit={handleSignup}>
           <div className="my-8">
             <label className="block" htmlFor="">
               Email
             </label>
             <input
               name="email"
               className="w-full input input-bordered focus:outline-none"
               type="email"
             />
           </div>
           <div className="my-8 relative">
             <label className="block" htmlFor="">
               Password
             </label>
             <input
               name="password"
               id="password"
               className="w-full input input-bordered focus:outline-none"
               type="password"
             />
             {handlepassshow ? (
               <FaRegEye
                 className="absolute top-[38px] right-3 text-xl"
                 onClick={() => {
                   setHandlepassshow(!handlepassshow);
                   handlepasstext();
                 }}
               ></FaRegEye>
             ) : (
               <FaRegEyeSlash
                 className="absolute top-[38px] right-3 text-xl"
                 onClick={() => {
                   setHandlepassshow(!handlepassshow);
                   handlepasstext();
                 }}
               ></FaRegEyeSlash>
             )}
           </div>
           <div className="text-end">
             <div className="flex justify-between items-center">
               <button
                 type="reset"
                 className="btn bg-slate-400 hover:bg-slate-600 w-[48%] mx-1 text-black font-bold border-0 "
               >
                 Reset
               </button>
               <button className="btn bg-slate-400 hover:bg-slate-600 w-[48%] mx-1 text-black font-bold border-0 ">
                 SignUp
               </button>
             </div>
           </div>
         </form>
         <p className='mt-3 text-center'>
           Login here <Link className='text-green-500' to={"/login"}>Login</Link>
         </p>
       </div>
     </div>
   );
};

export default SignUp;