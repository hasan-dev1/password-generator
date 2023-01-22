import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../UserContext/UserContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState();
  const { setCatid, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://password-server.vercel.app/category?user=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setNavbar(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handlecatadd = (e) => {
    e.preventDefault();
    const categoryname = e.target.catname.value;
    const newcategory = { user: user.email, name: categoryname, password: [] };

    setLoading(true);
    fetch("https://password-server.vercel.app/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newcategory),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://password-server.vercel.app/category?user=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setNavbar(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-1 my-3">
        <h4 className="text-xl font-semibold">Media Name</h4>
        <label
          htmlFor="addcategoryname"
          className="btn btn-sm border-0 bg-[#3334358e] rounded-full"
        >
          <FaPlus></FaPlus>
        </label>
      </div>
      <ul>
        {loading ? (
          <div>Loading...</div>
        ) : (
          navbar?.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={`/category/${item._id}`}
                className={({ isActive }) =>
                  isActive
                    ? "m-1 bg-[#ced0d18e] pt-1 px-3 block text-black rounded"
                    : "m-1 bg-[#3334358e] hover:bg-[#ced0d18e] hover:text-black pt-1 px-3 block rounded"
                }
                onClick={() => setCatid(item._id)}
              >
                {item.name}
              </NavLink>
            </li>
          ))
        )}
      </ul>

      {/* for add category */}
      <input type="checkbox" id="addcategoryname" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative rounded">
          <label
            htmlFor="addcategoryname"
            className="btn btn-sm btn-circle absolute right-2 pt-1 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-6">Add a New Category</h3>
          <form onSubmit={handlecatadd}>
            <div className="mt-3">
              <label htmlFor="username">Category Name</label>
              <input
                name="catname"
                type="text"
                className="w-full input bg-[#696b6e38] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 my-3">
              <button type="reset" className="w-full btn capitalize">
                Clear
              </button>
              <button type="submit">
                <label
                  className="w-full btn capitalize"
                  htmlFor="addcategoryname"
                >
                  Add Category Name
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
