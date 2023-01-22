import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {
    const [handlepassshow, setHandlepassshow] = useState(false)
    const navigate  = useNavigate()

    const passtext = document.getElementById("password");
    const { handleLogin } = useContext(AuthContext)
    const handlepasstext = () => {
      if (passtext?.type === "password") {
        passtext.type = "text";
      } else if (passtext?.type === "text") {
        passtext.type = "password";
      }
    };

    const handlelogin = (e)=>{
        e.preventDefault()
        const form = e.target

        const username = form.username.value;
        const password = form.password.value;
        
        handleLogin(username, password)
        .then((result)=>{
          navigate('/')
        })
        .catch(err => console.log(err.message))
    }
    return (
      <div className="mt-16 w-1/2 mx-auto min-h-[50vh]">
        <div className="p-12 bg-[#7d808346]">
          <h3 className="text-3xl font-bold text-center pb-6">login</h3>
          <form onSubmit={handlelogin}>
            <div className="my-8">
              <label className="block" htmlFor="">
                User name
              </label>
              <input
                name="username"
                className="w-full input input-bordered focus:outline-none"
                type="text"
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
            <div className="flex justify-between items-center">
              <button
                type="reset"
                className="btn bg-slate-400 hover:bg-slate-600 w-[48%] mx-1 text-black font-bold border-0 "
              >
                Reset
              </button>
              <button className="btn bg-slate-400 hover:bg-slate-600 w-[48%] mx-1 text-black font-bold border-0 ">
                Login
              </button>
            </div>
          </form>
          <p className="mt-3 text-center">
            Create an account{" "}
            <Link className="text-green-500" to={"/signup"}>
              Signup
            </Link>
          </p>

          <div className="mt-6 ">
            <h3 className="capitalize text-green-400">
              login using this email & pass For testing{" "}
            </h3>
            <p>email: web@hr.com</p>
            <p>password: 222222</p>
          </div>
        </div>
      </div>
    );
};

export default Login;