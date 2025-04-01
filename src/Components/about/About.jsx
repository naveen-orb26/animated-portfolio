import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="about-container">
            <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                About Me
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                I am a passionate developer with a keen interest in software development, AI, and technology innovation. My journey started with curiosity, and now I aim to build impactful solutions.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                Currently pursuing my BTech, I continuously explore new technologies, work on exciting projects, and enhance my skills to create meaningful contributions to the tech community.
            </motion.p>

            <div className="experience">
                <motion.h2 initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                    Education & Experience
                </motion.h2>

                <motion.div className="edu-box"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                    <h3>Associate Director - Rotaract Club of VITC</h3>
                    <p>Currently serving as a crucial member in the Rotaract Club, contributing to community service and self-development.</p>
                </motion.div>

                <motion.div className="edu-box"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
                    <h3>Pursuing BTech</h3>
                    <p>Studying Computer Science with AI & ML at VIT Chennai. CGPA: 8.85</p>
                </motion.div>

                <motion.div className="edu-box"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                    <h3>12th Grade</h3>
                    <p>Excelled in higher secondary education, focusing on physics, chemistry, and computer science. Aggregate: 86.2%</p>
                </motion.div>

                <motion.div className="edu-box"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                    <h3>10th Grade</h3>
                    <p>Completed secondary education with strong foundations in mathematics and science. Aggregate: 96.4%</p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
