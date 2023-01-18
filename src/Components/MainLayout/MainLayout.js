import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { BiPlusMedical } from "react-icons/bi";

const MainLayout = () => {
  return (
    <div className="mt-16 w-2/3 mx-auto bg-[#696b6e38] p-8 rounded">
      <div className="m-2 flex justify-end items-center">
        <div className="flex justify-end items-center">
          <h3 className=" font-bold mr-3 bg-[#9a9da046] p-1 flex items-center rounded">
            <BiPlusMedical className="mr-2"></BiPlusMedical> <span>Generate a password</span>
          </h3>
          <h3 className="text-xl font-bold mr-3 bg-[#9a9da046] p-1 rounded">
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
        <div className="bg-[#9a9da046] m-2 w-[250px] rounded p-2">
          <Navbar></Navbar>
        </div>
        <div className="bg-[#9a9da046] m-2 flex-1 rounded p-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
