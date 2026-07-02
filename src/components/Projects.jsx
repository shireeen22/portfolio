import { useState } from "react";
import Modal from "react-modal";

import home from "../assets/projects/home.png";
import banking from "../assets/projects/bankingChatbot.png"; 

Modal.setAppElement("#root");

const projects = [
  {
    title: "AI Personalized EdTech Platform",
    image: home,
    description:
      "AI-powered educational platform with Performance Prediction, AI Quiz Generator, Notes Generator, AI Explainer, Teacher Dashboard and Personalized Learning.",
    tech: [
      "Python",
      "FastAPI",
      "Streamlit",
      "LangChain",
      "LLMs",
      "RAG",
      "MySQL",
    ],
    github:
      "https://github.com/shireeen22/AI-personalized-EdTech-platform",
    live: "",
    video:
      "https://drive.google.com/file/d/1gfqwY7B6tkRhM3mRr-DndYnrrZgVkQOO/view?usp=sharing",
  },

  {
    title: "AI Banking FAQ Chatbot",
    image: banking,
    description:
      "AI-powered Banking FAQ Chatbot using RAG, Groq, OCR for answering customer banking queries with multilingual support and Image Analysis.",
    tech: [
      "Python",
      "Streamlit",
      "Groq",
      "RAG",
      "FAISS",
      "LangChain",
      "OCR",
      "Sementic Search"
    ],
    github:
      "https://github.com/shireeen22/AI-Banking-FAQ-Chatbot", 
    live:
      "https://shireeen22-ai-banking-faq-chatbot-app-m1fynh.streamlit.app/",
    video: "",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center mb-4">
        Projects 🚀
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Some of my AI & Machine Learning Projects
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="
              cursor-pointer
              bg-slate-900
              rounded-3xl
              overflow-hidden
              border
              border-slate-700
              hover:border-cyan-400
              hover:shadow-cyan-500/30
              hover:shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button
                className="
                  mt-6
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-5
                  py-2
                  rounded-xl
                "
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        className="
          max-w-3xl
          mx-auto
          mt-20
          bg-slate-900
          p-8
          rounded-3xl
          outline-none
        "
        overlayClassName="
          fixed
          inset-0
          bg-black/80
          flex
          justify-center
          items-start
          z-50
          overflow-auto
        "
      >
        {selectedProject && (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-cyan-400">
                {selectedProject.title}
              </h2>

              <button
                onClick={() => setSelectedProject(null)}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-2xl mt-6"
            />

            <p className="mt-6 text-gray-300 leading-8">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {selectedProject.tech.map((item) => (
                <span
                  key={item}
                  className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
              >
                GitHub Repository
              </a>

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl"
                >
                  Live Demo
                </a>
              )}

              {selectedProject.video && (
                <a
                  href={selectedProject.video}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl"
                >
                  Demo Video
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Projects;
