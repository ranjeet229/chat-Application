import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-md">
          Sign Up
        </h1>

        <form className="grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="your name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              UserName
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="col-span-2 sm:col-span-1 relative">
            <label className="block text-white mb-2 text-sm font-semibold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full p-3 pr-10 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="col-span-2 sm:col-span-1 relative">
            <label className="block text-white mb-2 text-sm font-semibold">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full p-3 pr-10 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-10 text-gray-300 hover:text-white"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>


          {/* Gender */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              Gender
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="accent-blue-500"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="accent-blue-500"
                />
                <span>Female</span>
              </label>
            </div>
          </div>


          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
            >
              Signup
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-200 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-300 hover:underline">
            <Link to="/login">
              Log in
            </Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
