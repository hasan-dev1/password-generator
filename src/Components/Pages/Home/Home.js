import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaHandPointUp, FaRegEye, FaRegEyeSlash, FaTrash } from "react-icons/fa";

import { AuthContext } from "../../UserContext/UserContext";

const Home = () => {
  const {catid} = useContext(AuthContext)
  const [navdata, setNavdata] = useState([])
  const [handlepassshow, setHandlepassshow] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(catid !== 'a'){
      setLoading(true)
      fetch(`https://password-server.vercel.app/category/${catid}`)
        .then((res) => res.json())
        .then((data) => {
          setNavdata(data);
          setLoading(false)
        })
        .catch(err => console.log(err.message))
    }
  },[catid])

  const passtext = document.getElementById("password");
  const handlepasstext = () => {
    if (passtext?.type === "password") {
      passtext.type = "text";
    } else if (passtext?.type === "text") {
      passtext.type = "password";
    }
  };

  const handlepassadd = (e) => {
    e.preventDefault();
    const form = e.target;

    const time = new Date().toISOString()
    const navdataid = navdata._id;
    const username = form.username.value;
    const pass = form.password.value;
    const bodydata = {id:time, username, pass };


    fetch(`https://password-server.vercel.app/category?id=${navdataid}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(bodydata)
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(true)
        fetch(`https://password-server.vercel.app/category/${catid}`)
          .then((res) => res.json())
          .then((data) => {
            setNavdata(data);
            setLoading(false)
          });
      });

  };

  const handledelete = (id) => {
    fetch(`https://password-server.vercel.app/category/pass?id=${catid}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({categoryid:id})
    })
    .then(res => res.json())
    .then(data => {

      if(data.acknowledged === true ){
        setLoading(true);
        fetch(`https://password-server.vercel.app/category/${catid}`)
          .then((res) => res.json())
          .then((data) => {
            setNavdata(data);
            setLoading(false);
          });
      }
    })
  };

  const handleedit = (id)=>{
    console.log(id)
  }

  return (
    <div className="m-3 ">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">{navdata.name}</h3>
        <label
          htmlFor="addpasswordmodal"
          className="btn btn-sm rounded-[20px] pt-1 bg-[#3334358e] border-0 capitalize"
        >
          Add Password
        </label>
      </div>
      <div className="mt-6 overflow-auto h-[70vh]">
        {loading ? (
          <div>Loading...</div>
        ) : catid !== "a" ? (
          navdata?.password?.length === 0 ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <h4 className="text-4xl ">Please add a password </h4>
              <FaHandPointUp className="text-4xl ml-2 rotate-[15deg] text-green-400"></FaHandPointUp>
            </div>
          ) : (
            navdata?.password?.map((item, idx) => (
              <div
                key={idx}
                className="my-3 bg-slate-600 rounded p-2 flex justify-between items-center"
              >
                <div>
                  <h4>
                    Username:{" "}
                    <span className="tracking-wide">{item.username}</span>
                  </h4>
                  <h4>
                    Password: <span className="tracking-wide">{item.pass}</span>
                  </h4>
                </div>
                <div className="flex justify-center items-center">
                  <span
                    onClick={() => handledelete(item.id)}
                    className="btn rounded-full btn-sm bg-slate-500 hover:bg-slate-700 border-0 mx-2"
                  >
                    <FaTrash></FaTrash>
                  </span>
                  <span
                    onClick={() => handleedit(item.id)}
                    className="btn rounded-full btn-sm bg-slate-500 hover:bg-slate-700 border-0 mx-2"
                  >
                    <FaEdit></FaEdit>
                  </span>
                </div>
              </div>
            ))
          )
        ) : (
          <div>Click a category name</div>
        )}
      </div>

      {/* for add password */}
      <input type="checkbox" id="addpasswordmodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative rounded">
          <label
            htmlFor="addpasswordmodal"
            className="btn btn-sm btn-circle absolute right-2 pt-1 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-6">
            Add your Password For{" "}
            <span className="text-green-400">{navdata.name}</span>
          </h3>
          <form onSubmit={handlepassadd}>
            <div className="mt-3">
              <label htmlFor="username">User Name</label>
              <input
                name="username"
                type="text"
                id="username"
                className="w-full input bg-[#696b6e38] focus:outline-none"
              />
            </div>
            <div className="mt-3 relative">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                className="w-full input bg-[#696b6e38] focus:outline-none"
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

            <div className="grid grid-cols-2 gap-3 my-3">
              <button type="reset" className="w-full btn capitalize">
                Clear
              </button>
              <button type="submit">
                <label
                  className="w-full btn capitalize"
                  htmlFor="addpasswordmodal"
                >
                  Add Password
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
