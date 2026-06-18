import home from "../assets/projects/home.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center mb-4">
        Featured Project 🚀
      </h2>

      <p className="text-center text-gray-400 mb-12">
        AI, Machine Learning & Generative AI Project
      </p>

      <div
        className="
          bg-slate-900
          rounded-3xl
          overflow-hidden
          border
          border-slate-800
          shadow-xl
        "
      >
        {/* Project Image */}

        <img
          src={home}
          alt="AI EdTech Platform"
          className="
            w-full
            h-[450px]
            object-cover
          "
        />

        {/* Content */}

        <div className="p-8">

          <h3 className="text-3xl font-bold text-cyan-400">
            AI Personalized EdTech Platform
          </h3>

          <p className="mt-6 text-gray-300 leading-8 text-lg">
            Developed an AI-powered educational platform featuring
            Performance Prediction, AI Quiz Generation, Notes Generation,
            AI Explainer, AI Motivator, Teacher Dashboard, Class-wise &
            Subject-wise Quizzes and Personalized Learning using
            Generative AI, RAG, Large Language Models and
            Microservice-based Deployment Architecture.
          </p>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "FastAPI",
              "Streamlit",
              "LangChain",
              "RAG",
              "LLMs",
              "MySQL",
              "Groq",
              "HuggingFace",
              "Render",
              "Railway",
              "AIVEN",
              "Microservices",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  bg-cyan-500/20
                  text-cyan-400
                  px-4
                  py-2
                  rounded-full
                  border
                  border-cyan-500/20
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://github.com/shireeen22/AI-personalized-EdTech-platform"
              target="_blank"
              rel="noreferrer"
              className="
                bg-cyan-500
                hover:bg-cyan-600
                px-6
                py-3
                rounded-xl
                transition
              "
            >
              GitHub Repository
            </a>

            <a
              href="https://drive.google.com/file/d/1gfqwY7B6tkRhM3mRr-DndYnrrZgVkQOO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="
                border
                border-cyan-400
                px-6
                py-3
                rounded-xl
                hover:bg-cyan-500
                transition
              "
            >
              Open Demo Video
            </a>

          </div>

          {/* Demo Video */}

          <div className="mt-12">

            <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
              Project Demo Video 🎥
            </h4>

            <div className="overflow-hidden rounded-2xl border border-slate-700">

              <iframe
                src="https://drive.google.com/file/d/1gfqwY7B6tkRhM3mRr-DndYnrrZgVkQOO/preview"
                width="100%"
                height="500"
                allow="autoplay"
                title="AI EdTech Demo"
                className="w-full"
              ></iframe>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;