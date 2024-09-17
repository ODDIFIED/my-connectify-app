import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full max-w-full  ">
      <div className=" xxs:hidden  sm:px-10 py-3 bg-blue-600 sm:flex sm:items-center sm:justify-between ">
        {/* right side */}
        <div className="flex justify-between items-center">
          <h2 className="font-righteous text-xl text-white">Connectify </h2>
        </div>
        {/* Left side */}
        <div className="font-roboto font-semibold text-white flex justify-between items-center gap-5">
          <Link to={""}>
            <h3>About</h3>
          </Link>
          <Link to={"/"}>
            <h2>Blog</h2>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-screen xxs:flex sm:hidden  bg-blue-600">
        <div className=" w-full max-w-screen px-5 py-3 sm:hidden xxs:flex xxs:flex-row xxs:items-center xxs:justify-between">
          {/* right side  */}
          <div onClick={handleNav}>
            {nav ? (
              <IoClose
                className=" fill-white"
                size={"30px"}
              />
            ) : (
              <GiHamburgerMenu
                className=" fill-white "
                size={"25px"}
                color={"gray"}
              />
            )}
          </div>

          {/* left side */}
          <div className="flex justify-between items-center">
            <h2 className="font-righteous text-xl text-white">Connectify </h2>
          </div>
        </div>
      </div>
      <div className={
              nav
                ? "absolute xxs:w-[100%]  xxs:h-[30%] mx-auto  bg-blue-600   xxs:top-10 xxs:right-0 xxs:left-0 xxs:bottom-0    ease-in-out  duration-500s   "
                : "hidden"
            }>
            <div className="w-full mx-auto  font-bold text-white flex-row justify-center items-center text-center mt-5 px-4">
          <Link to={""} >
            <h3 className="text-2xl">About</h3>
          </Link>
          <Link to={"/"} className=" text-2xl ">
            <h2 className="mt-5">Blog</h2>
          </Link>
          <Link to={"/"} className=" text-2xl ">
            <h2 className="mt-5">Contact Us</h2>
          </Link>
        </div>

      </div>

      <div>
        {/* outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
