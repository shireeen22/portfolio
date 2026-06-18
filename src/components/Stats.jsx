import { FaLaptopCode, FaCertificate, FaBriefcase, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaLaptopCode size={35} />,
    number: "5+",
    title: "Projects",
    description: "AI, ML, NLP, RAG & Full Stack Projects",
  },
  {
    icon: <FaBriefcase size={35} />,
    number: "2",
    title: "Internships",
    description: "Labmantix & GNCIPL",
  },
  {
    icon: <FaCertificate size={35} />,
    number: "10+",
    title: "Certifications",
    description: "Professional & Technical Certifications",
  },
  {
    icon: <FaBrain size={35} />,
    number: "AI & ML",
    title: "Specialization",
    description: "MCA with AI & ML",
  },
];

const Stats = () => {
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
      className="
        py-24
        px-6
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Professional Highlights
          </h2>

          <p className="text-center text-gray-400 mb-16">
            A quick overview of my journey and achievements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-400
                hover:shadow-cyan-500/20
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-3">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;