import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/* Floating Social Icons */}

      <div className="fixed right-6 bottom-10 flex flex-col gap-4 z-50">

        <a
          href="https://www.linkedin.com/in/shireen-khan-b9134a360/"
          target="_blank"
          rel="noreferrer"
          className="
            bg-blue-600
            p-4
            rounded-full
            text-white
            hover:scale-110
            transition
          "
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://github.com/shireeen22"
          target="_blank"
          rel="noreferrer"
          className="
            bg-gray-800
            p-4
            rounded-full
            text-white
            hover:scale-110
            transition
          "
        >
          <FaGithub size={22} />
        </a>

        <a
          href="mailto:shireeenk2002@gmail.com"
          className="
            bg-red-500
            p-4
            rounded-full
            text-white
            hover:scale-110
            transition
          "
        >
          <FaEnvelope size={22} />
        </a>

      </div>

      {/* Contact Section */}

      <section
        id="contact"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Open to AI, Machine Learning, Data Science and Software Development opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 overflow-hidden">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              bg-slate-800
              p-8
              rounded-3xl
              border
              border-slate-700
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />
                <span>shireeenk2002@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />
                <span>kshireen2209@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />
                <span>shireenkhan@amityonline.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400" />
                <span>8619886972</span>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://www.linkedin.com/in/shireen-khan-b9134a360/"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-blue-600
                  px-5
                  py-3
                  rounded-xl
                  hover:opacity-90
                  transition
                "
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/shireeen22"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-gray-700
                  px-5
                  py-3
                  rounded-xl
                  hover:opacity-90
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="
                  bg-cyan-500
                  px-5
                  py-3
                  rounded-xl
                  flex
                  items-center
                  gap-2
                  hover:bg-cyan-600
                  transition
                "
              >
                <FaDownload />
                View Resume
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              bg-slate-800
              p-8
              rounded-3xl
              border
              border-slate-700
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Send Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-700
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-700
                  outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-700
                  outline-none
                "
              ></textarea>

              <button
                type="submit"
                className="
                  bg-cyan-500
                  px-8
                  py-3
                  rounded-xl
                  hover:bg-cyan-600
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;