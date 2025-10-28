import React from "react";
import { IoIosEye } from "react-icons/io";
import MostHeader from "../components/MostHeader";
import Footer from "../components/Footer";
const LoginPage = () => {
  return (
    <>
        <div className="  h-full w-auto flex  justify-center">
            <MostHeader className="-top-10   " />

            <div className="flex h-full mt-0 pt-40 w-3xl items-center justify-center   ">
                    {/* Left Section */}
                <div className="bg-sky-950  tracking-widest  flex  justify-start pl-5  h-96 w-xs ">
                        <h1 className="text-white text-5xl font-semibold  leading-snug h-48">
                            Deals on  
                            overstock  
                            inventory:  
                            Everything  
                            has to go!
                        </h1>
                </div>

                    {/* Right Section */}
                <div className="flex-1 flex flex-col justify-center px-20">
                    <div className="max-w-md w-full">
                        <h2 className="text-2xl font-semibold text-[#162B4E] mb-8 border-b pb-2">
                            Sign In and Get Started
                        </h2>

                        {/* Email Input */}
                        <div className="mb-6">
                            <label className="block text-[#162B4E] text-sm mb-2">Email</label>
                            <input
                            type="email"
                            placeholder="Enter email"required
                            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-3 relative">
                            <label className="block text-[#162B4E] text-sm mb-2">
                            Password
                            </label>
                            <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                                <IoIosEye className="absolute right-4 top-10 text-gray-400" />
                        </div>

                        {/* Stay Logged In & Forgot Password */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-gray-500 text-sm">
                            <input type="checkbox" className="mr-2" />
                            Stay Logged In
                            </label>
                            <a
                            href="#"
                            className="text-orange-500 font-semibold text-sm hover:underline"
                            >
                            Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition">
                            Log In
                            <span className="text-lg">↩</span>
                        </button>

                        {/* Sign Up Link */}
                        <p className="text-center text-gray-500 text-sm mt-6">
                            Don’t have an account?{" "}
                            <a href="#" className="text-orange-500 font-semibold hover:underline">
                            Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
  );
};

export default LoginPage;
