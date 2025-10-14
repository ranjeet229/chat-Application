import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"
import { BASE_URL } from "..";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
    setErrors({ ...errors, gender: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!user.fullName.trim()) newErrors.fullName = "Full Name is required!";
    if (!user.username.trim()) newErrors.username = "Username is required!";
    if (!user.password.trim()) newErrors.password = "Password is required!";
    if (!user.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm Password is required!";
    if (user.password && user.confirmPassword && user.password !== user.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match!";
    if (!user.gender) newErrors.gender = "Gender is required!";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        if (res.data.success) {
          navigate("/login");
          toast.success(res.data.message);
        }

      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);

      }
      setUser({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      })
    }
  };

  const inputClass = (fieldError) =>
    `w-full p-3 rounded-lg border text-white placeholder-gray-200 focus:outline-none focus:ring-2 transition-all ${fieldError ? "border-red-500 focus:ring-red-500 bg-red-500/10" : "border-white/30 bg-white/10 focus:ring-blue-400"
    }`;

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-md">
          Sign Up
        </h1>

        <form onSubmit={onSubmitHandler} className="grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              Full Name
            </label>
            <input
              value={user.fullName}
              onChange={(e) => {
                setUser({ ...user, fullName: e.target.value });
                setErrors({ ...errors, fullName: "" });
              }}
              type="text"
              placeholder="Full name"
              className={inputClass(errors.fullName)}
            />
            {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>}
          </div>

          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              Username
            </label>
            <input
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
                setErrors({ ...errors, username: "" });
              }}
              type="text"
              placeholder="Username"
              className={inputClass(errors.username)}
            />
            {errors.username && <p className="text-red-400 text-sm mt-2">{errors.username}</p>}
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1 relative">
            <label className="block text-white mb-2 text-sm font-semibold">
              Password
            </label>
            <input
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                setErrors({ ...errors, password: "" });
              }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className={inputClass(errors.password)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="col-span-2 sm:col-span-1 relative">
            <label className="block text-white mb-2 text-sm font-semibold">
              Confirm Password
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => {
                setUser({ ...user, confirmPassword: e.target.value });
                setErrors({ ...errors, confirmPassword: "" });
              }}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className={inputClass(errors.confirmPassword)}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-10 text-gray-300 hover:text-white"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-2">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Gender */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white mb-2 text-sm font-semibold">
              Gender
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="checkbox"
                  name="gender"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}

                  className="checkbox"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="checkbox"
                  name="gender"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  className="checkbox"
                />
                <span>Female</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-400 text-sm mt-2">{errors.gender}</p>}
          </div>

          {/* Submit */}
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
          <Link to="/login" className="text-blue-300 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
