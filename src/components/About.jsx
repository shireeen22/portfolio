import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me🪄
        </h2>

        <p className="text-lg text-gray-300 leading-8 text-center">
          AI & Machine Learning Engineer with 
          expertise in Machine Learning, Deep Learning,
          Generative AI and build intelligent systems.

          I am Skilled in developing AI-powered applications
          and Interactive dashboards
          using LLMs, RAG pipelines, python, Mysql,
          FastAPI, LangChain and Vector Databases.

          Hands-on experience with AI tools including 
          ChatGPT, Antigravity, and Whisk to accelerate
          development and enhance productivity.

          Passionate about leveraging AI to solve real-world 
          problems and introduce AI power to the users.❤️

          I am focusing on new AI technologies and fields.🤖👍
        </p>
      </motion.div>
    </section>
  );
};

export default About;

