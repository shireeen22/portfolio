import { motion } from "framer-motion";

const educationData = [
  {
    year: "2024 - 2026",
    title: "Master of Computer Applications (AI & ML)",
    institute: "Amity University, Noida",
    description:
      "Pursuing MCA with specialization in Artificial Intelligence & Machine Learning. Gaining expertise in Machine Learning, Deep Learning, NLP, Generative AI, RAG Systems, FastAPI, and AI-powered application development.",
  },
  {
    year: "2020-2023",
    title: "Bachelor of Science (B.Sc)",
    institute: "MDS University",
    description:
      "Graduated with 72%. Built a strong foundation in mathematics, analytical thinking, computer fundamentals, and problem-solving.",
  },
  {
    year: "Class 12",
    title: "Senior Secondary Education",
    institute: "RBSE Board",
    description:
      "Scored 85% and received Balika Shiksha Protsahan Yojana and Scooty Yojana awards for academic excellence.",
  },
  {
    year: "Class 10",
    title: "Secondary Education",
    institute: "RBSE Board",
    description:
      "Scored 86% with consistent academic performance and received Balika Shiksha Protsahan Yojana",
  },
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-4">
          Education Journey🎓
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Academic milestones and continuous learning journey🌟
        </p>
      </motion.div>

      <div className="relative ml-4 md:ml-10">
        {/* Animated Vertical Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-1 bg-cyan-500 h-full origin-top"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-1"
        >
          {educationData.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <div
                className="
                  absolute
                  -left-[38px]
                  top-6
                  w-4
                  h-4
                  rounded-full
                  bg-cyan-400
                  border-4
                  border-slate-900
                  z-10
                "
              ></div>

              <motion.div
                variants={itemVariants}
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-3xl
                  p-6
                  hover:border-cyan-400
                  hover:shadow-xl
                  hover:shadow-cyan-500/20
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <span className="text-cyan-400 font-semibold text-lg">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.institute}
                </p>

                <p className="mt-4 text-gray-300 leading-7">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* NEET Achievement Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          mt-20
          bg-gradient-to-r
          from-cyan-500/10
          to-blue-500/10
          border
          border-cyan-400
          rounded-3xl
          p-8
          text-center
          hover:shadow-xl
          hover:shadow-cyan-500/20
          transition-all
          duration-300
        "
      >
        <h3 className="text-3xl font-bold text-cyan-400">
          🏆 NEET Achievement
        </h3>

        <p className="mt-4 text-xl">
          Cleared NEET Examination in First Attempt🌟
        </p>

        <p className="text-gray-300 mt-4 leading-7">
          Secured 300 Marks in NEET, demonstrating strong analytical,
          problem-solving, and competitive examination capabilities.
        </p>
      </motion.div>
    </section>
  );
};

export default Education;