import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = ({ Close, onSwitch }) => {
  const [changeField, setChangeField] = useState(false);

  return (
    <div className="fixed bg-black/60 w-full h-screen top-0 left-0">
      <div className="relative justify-center items-center rounded-md p-5  border-md md:max-w-md max-w-xs mx-auto right-10 w-full inset-y-40">
        <form className="rounded-md p-5 bg-gray-800 border-md md:max-w-md max-w-xs mx-auto">
          <div className="flex justify-end items-end">
            <button onClick={() => Close(false)} className="text-white">
              {" "}
              <AiOutlineClose className="text-2xl font-semibold" />{" "}
            </button>
          </div>
          <h2 className="text-center font-semibold text-2xl text-white">
            Sign in
          </h2>

          <div>
            <div className={`${changeField ? "block" : "hidden"}`}>
              <input
                type="text"
                placeholder="email or phone"
                required
                className="w-full focus:border-green-500 focus:outline-none"
              />
              <input
                type="password"
                placeholder="password"
                required
                className="w-full focus:border-green-500 focus:outline-none"
              />
              <div className="w-full ">
                <button className="bg-green-600 rounded-md w-full p-3">
                  <span className="text-xl font-semibold uppercase text-white">
                    Sign in
                  </span>
                </button>
              </div>
            </div>
            <div className="flex py-5 justify-between items-center gap-2.5">
              <button className="bg-white p-2.5 text-black hover:bg-slate-400 w-full text-center font-[Poppins] rounded-md justify-center">
                <span className="flex justify-center space-x-2 items-center text-xl font-semibold">
                  {" "}
                  <FcGoogle className="text-2xl text-blue-800" />{" "}
                  <span> Goggle</span>{" "}
                </span>
              </button>
              <button className="bg-blue-800 hover:bg-blue-800/50 p-2.5 text-white w-full text-center font-[Poppins] rounded-md justify-center">
                <span className="flex justify-center space-x-2 items-center text-xl font-semibold">
                  <BsFacebook className="text-2xl text-white" />{" "}
                  <span>Facebook</span>
                </span>{" "}
              </button>
            </div>

            <div>
              <button
                onClick={() => setChangeField(!changeField)}
                className={`bg-green-600 ${
                  changeField ? "hidden" : "block"
                } hover:bg-green-700 p-2.5 text-white w-full text-center font-[Poppins] rounded-md justify-center `}
              >
                <span className="text-lg font-semibold">Email or Phone</span>
              </button>

              <div className="text-center py-5 gap-5 grid text-white">
                <h3 className="text-base font-semibold">
                  Don't have an account?
                  <Link onClick={onSwitch} className="text-green-400">
                    {" "}
                    Register
                  </Link>
                </h3>
                <h3 className={`text-sm font-semibold ${changeField ? "hidden" : "block"}`}>
                  By continuing you agree to the Policy and Rules
                </h3>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;