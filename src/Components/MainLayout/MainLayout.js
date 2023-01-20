import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { FaCopy, FaPlus, FaUndo } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import './MainLayout.css'


const MainLayout = () => {

  const generateyourpassword = () => {
    console.log("generate pass");
  };

  return (
    <div className="m-6 w-2/3 mx-auto bg-[#696b6e38] p-8 rounded">
      <div className="m-2 flex justify-end items-center">
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
          <img
            className="w-12 h-12 rounded-full"
            src="https://images.pexels.com/photos/14943140/pexels-photo-14943140.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div className="bg-[#7d808346] m-2 w-[250px] rounded p-2">
          <Navbar></Navbar>
        </div>
        <div className="bg-[#7d808346] m-2 flex-1 rounded p-2">
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
          <h3 className="text-lg font-bold mb-6">Generate your Password For</h3>
          <div className="m-4 bg-slate-600 rounded p-3 flex justify-between items-center">
            lasdjfjoi09tu9042jrjewfj{" "}
            <div className="flex justify-end items-center">
              <span className="btn rounded-full btn-sm mr-2 bg-slate-500 border-0 hover:bg-slate-700"><FaCopy className="font-bold"></FaCopy></span>
              <span className="btn rounded-full btn-sm mr-2 bg-slate-500 border-0 hover:bg-slate-700"><FaUndo className="font-bold flipicon"></FaUndo></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
