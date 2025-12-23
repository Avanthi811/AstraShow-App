import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [startAnim, setStartAnim] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setStartAnim(true), 700);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2200ms] ease-out 
          ${startAnim ? "video-reveal scale-110" : "video-grid blur-[2px] opacity-60"}
        `}
      >
        <source
          src="https://res.cloudinary.com/dsgytnn2w/video/upload/v1762840670/From_KlickPin_CF_avengers_marvel_chrisevans_captainamerica_movie_venom_spiderman_tomholland_peterparker_in_2025___Amazing_spiderman_movie_Amazing_spiderman_Spiderman_comic_art_hzn4hr.mp4"
          type="video/mp4"
        />
      </video>

      
      <div className="absolute inset-0 bg-black/30 " />

      
      <div className="relative z-10 px-6 py-6 w-full max-w-md rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Welcome to <span className="text-blue-400">Ⱥ</span>straShow
        </h1>

        {error && (
          <p className="text-red-300 text-center mb-3 text-xs bg-red-500/10 py-1 px-3 rounded-lg border border-red-500/30">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

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

          <button
            type="submit"
            className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-xl hover:bg-blue-500 transition-all duration-200 mt-2 text-sm md:text-base"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-300 text-xs font-light">or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <p className="text-center text-xs text-gray-300 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-blue-400 font-semibold hover:text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
