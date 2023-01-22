import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { FaCopy, FaPlus, FaRedoAlt } from "react-icons/fa";
import './MainLayout.css'
import { AuthContext } from "../UserContext/UserContext";


const MainLayout = () => {
  const [changepass, setChangepass] = useState(false)
  const [randompassword, setRandompassword] = useState('000000000000')
  const {user,logOut} = useContext(AuthContext)

  const generateyourpassword = () => {
    setChangepass(true)
    function randomnum(props){
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789abcdefghiklmnopqrstuvwxyz9876543210"
      const totalstr = props
      let randomstring = ''

      for(let i = 0; i < totalstr; i ++){
        const randomnumericdigit = Math.ceil(Math.random()*characters.length)
        randomstring += characters.substring(randomnumericdigit, randomnumericdigit+1)
      }
      return randomstring
    }
    setRandompassword(randomnum(12))
    setChangepass(false)
  };

  const copyrandompassword = ()=>{
    navigator.clipboard.writeText(randompassword);
  }
  return (
    <div className="m-6 w-2/3 mx-auto bg-[#696b6e38] p-8 rounded">
      <div className="m-2 flex justify-end items-center">
        {user ? (
          <div className="flex justify-end items-center">
            <label
              htmlFor="generatenewpassword"
              className="btn btn-sm mr-2 border-0 bg-[#9a9da046] flex py-1 justify-center items-center"
            >
              <FaPlus className="mx-1"></FaPlus>
              <span className="pt-1">Generate pass</span>
            </label>
            <h3 className="font-bold mr-3 bg-[#9a9da046] px-2 py-1 rounded">
              Md Hasan
            </h3>
            <Link onClick={()=>logOut()} className="font-bold mr-3 bg-[#9a9da046] px-2 py-1 rounded">
              SignOut
            </Link>
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.pexels.com/photos/14943140/pexels-photo-14943140.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button>
              <Link
                to={"/login"}
                className="btn bg-[#7d808346] border-0 hover:bg-[#b9bbbd46] pt-1 capitalize btn-sm mx-2"
              >
                Login
              </Link>
            </button>
            <button>
              <Link
                to={"/signup"}
                className="btn bg-[#7d808346] border-0 hover:bg-[#b9bbbd46] pt-1 capitalize btn-sm mx-2"
              >
                SignUp
              </Link>
            </button>
          </div>
        )}
      </div>
      <div className="flex">
        <div
          className={`${
            user ? "bg-[#7d808346] m-2 w-[250px] rounded p-2" : "hidden"
          }`}
        >
          <Navbar></Navbar>
        </div>
        <div
          className={`${
            user
              ? "bg-[#7d808346] m-2 flex-1 rounded p-2"
              : "m-2 flex-1 rounded p-2"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>

      {/* for generatepass */}
      <input
        type="checkbox"
        id="generatenewpassword"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative rounded">
          <label
            htmlFor="generatenewpassword"
            className="btn btn-sm btn-circle absolute right-2 pt-1 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-6">Generate your Password</h3>
          <div className="m-4 bg-slate-600 rounded p-3 flex justify-between items-center">
            {randompassword}{" "}
            <div className="flex justify-end items-center">
              <span className="btn rounded-full btn-sm mr-2 bg-slate-500 border-0 hover:bg-slate-700">
                <FaCopy
                  onClick={copyrandompassword}
                  className="font-bold"
                ></FaCopy>
              </span>
              <span
                onClick={generateyourpassword}
                className="btn rounded-full btn-sm mr-2 bg-slate-500 border-0 hover:bg-slate-700"
              >
                <FaRedoAlt
                  className={`${
                    changepass ? "animate-spin font-bold" : " font-bold "
                  }`}
                ></FaRedoAlt>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
