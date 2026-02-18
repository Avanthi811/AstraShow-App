import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [startAnim, setStartAnim] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setStartAnim(true), 700);
  }, []);

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match"); 
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      console.log("Register response:", data);
      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } 
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2200ms] ease-out 
          ${startAnim ? "video-reveal" : "video-grid blur-[2px] opacity-60"}
        `}
        style={{
          transform: "none",
          willChange: "auto",
        }}
      >
        <source
          src="https://res.cloudinary.com/dsgytnn2w/video/upload/v1762843141/From_KlickPin_CF_%EF%B8%8F_%EF%B8%8F_%EF%B8%8F_Video___Harry_potter_fandom_Harry_potter_memes_Harry_potter_costume_wye5zo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/30 " />
      <div className="relative z-10 px-6 py-6 w-full max-w-md rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Create an Account in <span className="text-blue-400">Ⱥ</span>straShow
        </h1>
        {error && (
          <p className="text-red-300 text-center mb-3 text-xs bg-red-500/10 py-1 px-3 rounded-lg border border-red-500/30">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-gray-200 text-xs font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-200 text-xs font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-200 text-xs font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-200 text-xs font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg  hover:bg-blue-500 transition-all duration-200 mt-2 text-sm md:text-base cursor-pointer"
          >
            Register
          </button>
        </form>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-300 text-xs font-light">or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <p className="text-center text-xs text-gray-300 mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-400 font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
