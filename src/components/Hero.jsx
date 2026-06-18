
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaBrain, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/portfoliopic.png";

    const Hero = () => {
      // --- Typing Effect Logic ---
      const titles = [
        "Aspiring AI & ML Engineer",
        "GenAI & LLM Developer",
        "RAG Systems Builder",
        "Deep Learning Enthusiast",
      ];

      const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
      const [currentText, setCurrentText] = useState("");
      const [isDeleting, setIsDeleting] = useState(false);
      const [typingSpeed, setTypingSpeed] = useState(80);

      useEffect(() => {
        let timer;
        const activeTitle = titles[currentTitleIndex];

        if (!isDeleting) {
          // Typing characters
          timer = setTimeout(() => {
            setCurrentText(activeTitle.substring(0, currentText.length + 1));
          }, typingSpeed);

          if (currentText === activeTitle) {
            // Wait at the end of word
            timer = setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          // Deleting characters
          timer = setTimeout(() => {
            setCurrentText(activeTitle.substring(0, currentText.length - 1));
          }, typingSpeed / 2);

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }

        return () => clearTimeout(timer);
      }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

      return (
        <section
          id="home"
          className="
            relative
            min-h-screen
            w-full
            flex
            items-center
            justify-center
            px-6
            py-20
            md:py-0
            bg-slate-950
            text-white
            overflow-hidden
          "
        >
          {/* Ambient Radial Glows (Glow Effect) */}
          <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-500/10 blur-[80px] md:blur-[130px]
  pointer-events-none z-0"></div>
          <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full bg-blue-600/10 blur-[90px] md:blur-
  [140px] pointer-events-none z-0"></div>

          {/* --- Animated Neural Network SVG Background --- */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-25">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Connecting Paths with Pulse */}
              <path
                d="M 100,180 L 300,120 L 420,280 L 180,380 Z"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1"
                className="animate-[pulse_4s_ease-in-out_infinite]"
              />
              <path
                d="M 600,650 L 780,520 L 920,680 L 700,780 Z"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="1"
                className="animate-[pulse_5s_ease-in-out_infinite]"
              />
              <path
                d="M 850,220 L 1020,160 L 1150,320 L 980,380 Z"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1"
                className="animate-[pulse_6s_ease-in-out_infinite]"
              />

              {/* Floating Nodes */}
              {/* Group 1 */}
              <circle cx="100" cy="180" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="100" cy="180" r="2.5" fill="#06b6d4" />
              <circle cx="300" cy="120" r="2.5" fill="#3b82f6" />
              <circle cx="420" cy="280" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDuration: '4s' }} />
              <circle cx="420" cy="280" r="2.5" fill="#06b6d4" />
              <circle cx="180" cy="380" r="2.5" fill="#3b82f6" />

              {/* Group 2 */}
              <circle cx="850" cy="220" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDuration: '5s' }} />
              <circle cx="850" cy="220" r="2.5" fill="#06b6d4" />
              <circle cx="1020" cy="160" r="2.5" fill="#3b82f6" />
              <circle cx="1150" cy="320" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDuration: '3.5s' }} />
              <circle cx="1150" cy="320" r="2.5" fill="#06b6d4" />
              <circle cx="980" cy="380" r="2.5" fill="#3b82f6" />

              {/* Group 3 */}
              <circle cx="600" cy="650" r="2.5" fill="#3b82f6" />
              <circle cx="780" cy="520" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDuration: '6s' }} />
              <circle cx="780" cy="520" r="2.5" fill="#06b6d4" />
              <circle cx="920" cy="680" r="2.5" fill="#3b82f6" />
              <circle cx="700" cy="780" r="2.5" fill="#06b6d4" />
            </svg>
          </div>

          <div
            className="
              relative
              z-10
              max-w-7xl
              w-full
              mx-auto
              grid
              lg:grid-cols-12
              gap-12
              lg:gap-16
              items-center
            "
          >
            {/* Left Side (Text & CTAs) - occupying 7 columns on large desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
            >

              {/* Dynamic AI Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                  px-4
                  py-2
                  rounded-full
                  mb-6
                  backdrop-blur-md
                  hover:border-cyan-400/50
                  transition-colors
                  duration-300
                "
              >
                <FaBrain className="text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-sm font-medium tracking-wide">
                  AI • ML • GenAI • RAG
                </span>
              </div>

              <p className="text-cyan-400 text-lg font-medium mb-2 tracking-wider">
                Hello, I'm
              </p>

              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  xl:text-7xl
                  font-extrabold
                  leading-[1.1]
                  tracking-tight
                "
              >
                Shireen
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Khan</span>
              </h1>

              {/* Dynamic Typing Title Container */}
              <div className="h-[40px] md:h-[50px] mt-4 flex items-center justify-center lg:justify-start">
                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    text-slate-100
                  "
                >
                  {currentText}
                  <span className="text-cyan-400 ml-1 font-extralight animate-[pulse_0.8s_infinite]">|</span>
                </h2>
              </div>

              <p
                className="
                  mt-6
                  text-slate-400
                  text-base
                  sm:text-lg
                  leading-relaxed
                  max-w-2xl
                "
              >
                MCA (AI & ML) student passionate about building intelligent systems.
                Skilled in developing AI-powered solutions using Python, Machine Learning,
                Deep Learning, NLP, Generative AI (LLMs), RAG pipelines, and Vector Databases.
              </p>

              {/* Improved CTA Action Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="
                    w-full
                    sm:w-auto
                    justify-center
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    hover:from-cyan-400
                    hover:to-blue-500
                    px-8
                    py-4
                    rounded-2xl
                    flex
                    items-center
                    gap-3
                    font-semibold
                    shadow-lg
                    shadow-cyan-500/20
                    hover:shadow-cyan-500/40
                    hover:scale-[1.03]
                    active:scale-[0.98]
                    transition-all
                    duration-300
                  "
                >
                  Let's Connect
                  <FaArrowRight className="text-sm" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    sm:w-auto
                    justify-center
                    bg-slate-900/60
                    backdrop-blur-md
                    border
                    border-slate-800
                    hover:border-cyan-400
                    px-8
                    py-4
                    rounded-2xl
                    flex
                    items-center
                    gap-3
                    font-semibold
                    text-slate-200
                    hover:text-white
                    hover:scale-[1.03]
                    active:scale-[0.98]
                    transition-all
                    duration-300
                  "
                >
                  <FaDownload className="text-cyan-400" />
                  View Resume
                </a>

                {/* Glassmorphic Social Icons */}
                <div className="flex gap-3 mt-2 sm:mt-0">
                  <a
                    href="https://linkedin.com/in/shireen-khan-b9134a360/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-slate-900/60
                      backdrop-blur-md
                      border
                      border-slate-800
                      hover:border-cyan-400
                      p-4
                      rounded-2xl
                      text-slate-400
                      hover:text-cyan-400
                      hover:scale-110
                      transition-all
                      duration-300
                    "
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>

                  <a
                    href="https://github.com/shireeen22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-slate-900/60
                      backdrop-blur-md
                      border
                      border-slate-800
                      hover:border-cyan-400
                      p-4
                      rounded-2xl
                      text-slate-400
                      hover:text-cyan-400
                      hover:scale-110
                      transition-all
                      duration-300
                    "
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Highlight Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10">
                {[
                  "MCA AI & ML",
                  "2 Internships",
                  "10+ Certifications",
                  "AI Projects Builder",
                ].map((highlight) => (
                  <span
                    key={highlight}
                    className="
                      bg-slate-900/80
                      backdrop-blur-md
                      border
                      border-slate-800
                      px-4
                      py-2
                      rounded-xl
                      text-sm
                      font-medium
                      text-slate-300
                      hover:border-cyan-500/30
                      transition-colors
                      duration-300
                    "
                  >
                    {highlight}
                  </span>
                ))}
              </div>

            </motion.div>

            {/* Right Side (Animated Profile Image) - occupying 5 columns on large desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center order-1 lg:order-2"
            >

              <div className="relative group">

                {/* Outer Glowing Cybernetic Ring with slow rotating animation */}
                <div
                  className="
                    absolute
                    -inset-4
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    opacity-70
                    blur-xl
                    animate-[spin_10s_linear_infinite]
                    group-hover:opacity-95
                    group-hover:blur-2xl
                    transition-all
                    duration-500
                  "
                ></div>

                {/* Inner Pulsing Ring */}
                <div
                  className="
                    absolute
                    -inset-1
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-400
                    opacity-90
                    animate-[pulse_3s_ease-in-out_infinite]
                  "
                ></div>

                {/* Main Avatar Container */}
                <div
                  className="
                    relative
                    w-72
                    h-72
                    sm:w-80
                    sm:h-80
                    md:w-[380px]
                    md:h-[380px]
                    xl:w-[420px]
                    xl:h-[420px]
                    rounded-full
                    overflow-hidden
                    border-4
                    border-slate-950
                    shadow-2xl
                    shadow-cyan-500/20
                    bg-slate-900
                  "
                >
                  <img
                    src={profile}
                    alt="Shireen Khan"
                    className="
                      w-full
                      h-full
                      object-cover
                      scale-[1.01]
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* Cybernetic HUD Tag Overlay (Bottom Corner of Image) */}
                <div
                  className="
                    absolute
                    -bottom-2
                    -right-2
                    bg-slate-900/90
                    backdrop-blur-md
                    border
                    border-cyan-500/40
                    px-4
                    py-2
                    rounded-2xl
                    text-xs
                    font-bold
                    text-cyan-400
                    shadow-lg
                    flex
                    items-center
                    gap-1.5
                    animate-bounce
                  "
                  style={{ animationDuration: '3s' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  ACTIVE SYSTEM
                </div>

              </div>

            </motion.div>
          </div>
        </section>
      );
    };

export default Hero;