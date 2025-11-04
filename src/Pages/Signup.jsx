import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import MostHeader from "../components/MostHeader";
import Footer from "../components/Footer";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
        <>
            <MostHeader className ="-top-10"/>
           <div className="h-full w-auto flex items-center justify-center   ">
                <div className="flex w-3xl h-150  bg-white pt-2  items-center justify-center mt-20   ">
                    {/* Left Section */}
                    <div className="md:w-1/2 h-full bg-[#0d2857] text-white md:flex text-xs px-10 pt-10 flex-col justify-center hidden ">
                        <h2 className="text-4xl font-bold mb-4 leading-snug tracking-wider ">
                            Deals on overstock inventory:
                            <br />
                            Everything has to go!
                        </h2>
                        <div className="flex justify-center mt-6">
                            <img
                            src="https://bidfordeal.com/public/frontend_assets/img/create-account.png"
                            alt="signup illustration"
                            className="w-60 h-60"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-xl p-10 w-full">
                        <h2 className="text-lg font-semibold text-[#0d2857] mb-3 border-b w-80 border-gray-300 pb-1">
                            Create Account
                        </h2>

                        {/* Username */}
                        <div className="mb-1">
                            <label className="block text-gray-700 font-medium mb-2">
                            Username
                            </label>
                            <input
                            type="text"
                            placeholder="Enter username"
                            className="w-80 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                    </div>

                    {/* Email */}
                    <div className="mb-1">
                        <label className="block text-gray-700 font-medium mb-2">
                        Email Id
                        </label>
                        <input
                        type="email"
                        placeholder="Enter email"
                        className="w-80 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-1 relative">
                        <label className="block text-gray-700 font-medium mb-2">
                        Password
                        </label>
                        <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="w-80 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute md:right-18 right-2 top-12 text-gray-600 cursor-pointer"
                        >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>

                    {/* Checkbox */}
                    <div className="mb-3 mt-3 text-sm w-80 text-gray-600">
                        <label className="flex items-start space-x-2">
                        <input type="checkbox" className="mt-1" required />
                        <span>
                            I have read and agree to the{" "}
                            <a href="#" className="text-blue-600 font-medium">
                            Terms of Use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-600 font-medium">
                            Privacy Policy
                            </a>
                            . I also agree that I am at least 18 years of age and to only
                            open one account per person.
                        </span>
                        </label>
                    </div>

                    {/* Create Button */}
                    <button className="w-80 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition duration-200">
                        Create
                    </button>

                    {/* Sign in */}
                    <p className="text-center text-gray-600 mt-4 text-sm w-80">
                        Already have an account?{" "}
                        <a href="#" className="text-orange-500 font-medium hover:underline">
                        Log In
                        </a>
                    </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
  );
};

export default Signup;
   