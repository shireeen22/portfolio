import { motion } from "framer-motion";

const experiences = [
  {
    company: "Labmantix",
    duration: "2 Months Internship👨‍💻",
    points: [
      "Developed a Local Food Wastage Management System",
      "Performed Data Analysis using Python and SQL",
      "Worked on data cleaning, visualization, and reporting",
      "Applied database concepts for efficient data management"
    ]
  },
  {
    company: "GNCIPL",
    duration: "6 Weeks AI/ML Internship👨‍💻",
    points: [
      "Performed Exploratory Data Analysis (EDA)",
      "Worked on Hypothesis Testing",
      "Built Supervised and Unsupervised Machine Learning Models",
      "Implemented Clustering Algorithms",
      "Worked on Deep Learning Projects",
      "Built a Product Recommendation System as a Group Project"
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-12">
          Experience🚀
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-slate-800 p-8 rounded-3xl border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              {exp.company}
            </h3>

            <p className="text-gray-400 mt-2">
              {exp.duration}
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;