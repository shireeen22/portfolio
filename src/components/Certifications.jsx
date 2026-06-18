import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

import gncipl from "../assets/certificates/gncipl.png";
import labmantix from "../assets/certificates/labmantix.png";
import aiml from "../assets/certificates/ai-and-ml.png";
import opencv from "../assets/certificates/opencv.png";
import leadership from "../assets/certificates/leadership.png";
import excel from "../assets/certificates/excel.png";
import professionalCommunication from "../assets/certificates/professional-life-skills.png";
import computerScience from "../assets/certificates/fundamental-cs.png";
import basicMaths from "../assets/certificates/basic-maths.png";
import acingInterview from "../assets/certificates/acing-your-interview.png";

Modal.setAppElement("#root");

const certificates = [
  {
    title: "AI & ML Internship",
    issuer: "GNCIPL",
    image: gncipl,
  },
  {
    title: "Data Analytics Internship",
    issuer: "Labmantix",
    image: labmantix,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Amity university,noida",
    image: aiml,
  },
  {
    title: "Tensorflow & Keras Bootcamp certificate",
    issuer: "OpenCv",
    image: opencv,
  },
  {
    title: "Leadership & Motivation in Organization",
    issuer: "Amity university,noida",
    image: leadership,
  },
  {
    title: "Advanced Excel",
    issuer: "Amity university,noida",
    image: excel,
  },
  {
    title: "Professional Communication",
    issuer: "Amity university,noida",
    image: professionalCommunication,
  },
  {
    title: "Fundamentals of Computer Science",
    issuer: "Amity university,noida",
    image: computerScience,
  },
  {
    title: "Basic Mathematics",
    issuer: "Amity university,noida",
    image: basicMaths,
  },
  {
    title: "Acing Your Interview",
    issuer: "Amity university,noida",
    image: acingInterview,
  },
];

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openCertificate = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeCertificate = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

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
      id="certifications"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-4">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Professional Certifications, Training Programs & Internships
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onClick={() =>
              openCertificate(cert.image, cert.title)
            }
            className="
              cursor-pointer
              bg-slate-800
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
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="
                  w-full
                  h-56
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-500
                "
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                {cert.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {cert.issuer}
              </p>

              <button
                className="
                  mt-4
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-4
                  py-2
                  rounded-xl
                  transition
                "
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeCertificate}
        className="
          max-w-6xl
          mx-auto
          mt-10
          bg-slate-900
          p-6
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
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-cyan-400">
            {selectedTitle}
          </h3>

          <button
            onClick={closeCertificate}
            className="
              bg-red-500
              px-4
              py-2
              rounded-lg
            "
          >
            Close
          </button>
        </div>

        {selectedImage && (
          <img
            src={selectedImage}
            alt={selectedTitle}
            className="
              w-full
              rounded-2xl
            "
          />
        )}
      </Modal>
    </section>
  );
}

export default Certifications;