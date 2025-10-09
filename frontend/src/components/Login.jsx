import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validate = () => {
    let newErrors = {};
    if (!user.username.trim()) newErrors.username = "Username is required!";
    if (!user.password.trim()) newErrors.password = "Password is required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        navigate("/");
        dispatch(setAuthUser(res.data));
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);

      }
      setUser({
        username: "",
        password: "",
      })
    }
  };

  const inputClass = (fieldError) =>
    `w-full p-3 rounded-lg border text-white placeholder-gray-200 focus:outline-none focus:ring-2 transition-all ${fieldError
      ? "border-red-500 focus:ring-red-500 bg-red-500/10"
      : "border-white/30 bg-white/10 focus:ring-blue-400"
    }`;

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-md">
          Log In
        </h1>

        <form onSubmit={onSubmitHandler} className="grid grid-cols-2 gap-6">
          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              value={user.username}
              placeholder="Username"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
                setErrors({ ...errors, username: "" });
              }}
              className={inputClass(errors.username)}
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-2">{errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1 relative">
            <label className="block text-white mb-2 text-sm font-semibold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={user.password}
              placeholder="Enter password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                setErrors({ ...errors, password: "" });
              }}
              className={inputClass(errors.password)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-400 text-sm mt-2">{errors.password}</p>
            )}
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
          <Link to="/register" className="text-blue-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
