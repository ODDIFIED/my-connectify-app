import React, { useState } from "react";
import Navbar from "./Navbar";
import SignUp from "../pages/SignUp";
import imageFarm from "../assets/image/deskstopView_connectify.jpg";
import Login from "../pages/loginAuth/login";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className=" sm:w-full sm:max-w-full">
      <Navbar />
      <div
        className=" w-full bg-cover  bg-center min-h-screen "
        style={{ backgroundImage: `url(${imageFarm})` }}
      >
        <div className="bg-gray-400 xxs:min-h-screen md:min-h-screen sm:h-30 bg-opacity-35 sm:px-5 md:px-10  sm:py-5  ">
          <div className="sm:w-full xxs:flex xxs:flex-col-reverse xxs:justify-center sm:mt-14 md:mt-0 md:flex md:flex-row md:justify-between">
            <div className="  md:w-[60%] sm:h-[40%] flex justify-center  items-center ">
              <h2 className=" xxs:mt-5 sm:mt-16 md:mt-40 xxs:text-center md:text-left font-jose font-bold sm:text-4xl  md:text-7xl text-white text-primary">
                The Simplest Whatsapp Sellers directory For Farmers
              </h2>
            </div>
            <div className="  md:w-[40%] md:h-[40%]">
              <div className="md:h-[40%] ">
                {showLogin ? (
                  <SignUp onSignSuccess={() => setShowLogin(true)} />
                ) : (
                  <Login />

                )}
                <div className="text-center mt-4">
                  <div className=" text-white pb-2 ">
                    {showLogin ?  "Already have an account ?" :"Don't have an account?"  }
                  </div>
                  <button
                    onClick={() => setShowLogin(!showLogin)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    {showLogin ? "Go to Login" : "Go to Sign Up" }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
