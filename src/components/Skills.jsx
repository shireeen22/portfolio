import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming",
    data: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    category: "AI / Machine Learning",
    data: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP", level: 80 },
    ],
  },
  {
    category: "Generative AI",
    data: [
      { name: "LLMs", level: 90 },
      { name: "RAG", level: 90 },
      { name: "LangChain", level: 85 },
    ],
  },
  {
    category: "Tools & Frameworks",
    data: [
      { name: "FastAPI", level: 90 },
      { name: "Render", level: 75 },
      { name:   "Railway",level: 75},
      { name: "Vs Code", level: 90 },
      {name: "Antigravity", level: 80},
      {name: "ChatGpt", level:95},
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-4">
          Skills Dashboard💻🛠️
        </h2>

        <p className="text-center text-gray-400 mb-14">
          My technical expertise and technology stack
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        {skills.map((group, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="
              bg-slate-900/40
              backdrop-blur-md
              rounded-3xl
              p-8
              border
              border-slate-800/80
              hover:bg-slate-800/30
              hover:border-cyan-400/50
              hover:shadow-cyan-500/20
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              {group.category}
            </h3>

            {group.data.map((skill, i) => (
              <div key={i} className="mb-5">

                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-cyan-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                  />
                </div>

              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;