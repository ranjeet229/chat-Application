import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-md">
          Log In
        </h1>

        <form className="grid grid-cols-2 gap-6">

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

          {/* Password */}
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

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-200 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-300 hover:underline">
            <Link to="/register">
              Sign up
            </Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
