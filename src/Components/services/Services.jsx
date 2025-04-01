import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", triggerOnce: false });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Research and Dev enthusiast
          <br /> excited to work
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Advanced</motion.b> Domain
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Researches</motion.b> and Projects.
          </h1>
          <button>Ongoing Works...</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Research</h2>
          <p>
            Our research applies quantum computing to enhance ICU patient anomaly detection through optimized feature selection.
            We integrate QML techniques like QPCA, QSVM, QBM, and VQC to reduce dimensionality and improve model training efficiency.
            After rigorous data preprocessing, we compare quantum and classical feature selection in terms of execution time and accuracy.
            The selected features enhance machine learning models, improving predictive performance for real-time ICU monitoring.
            By merging quantum algorithms with standard AI pipelines, we aim to develop a scalable, high-performance anomaly detection system,
            advancing AI-driven healthcare analytics.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Web</h2>
          <p>
          This React-based project uses Framer Motion to enhance UI interactions with smooth animations and transitions. 
          It features animated page transitions, interactive elements, staggered animations, and scroll-based effects. 
          Using motion.div components with properties like initial, animate, and exit, it creates a dynamic user experience. 
          Framer Motion's "AnimatePresence" ensures seamless navigation, while gesture-based animations like whileHover and
           whileTap improve responsiveness. This project showcases how React and Framer Motion can be combined to build visually
            engaging web applications effortlessly.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
