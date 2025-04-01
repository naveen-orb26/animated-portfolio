import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>B S NAVEEN</motion.h2>
                    <motion.h1 variants={textVariants}>AI & ML Undergrad</motion.h1>
                    <motion.div className="buttons">
                        {/* Button links */}
                        <motion.a href="#Services" variants={textVariants} className="button-link">
                            <motion.button>Latest works</motion.button>
                        </motion.a>
                        <motion.a href="#Contact" variants={textVariants} className="button-link">
                            <motion.button>Get in touch</motion.button>
                        </motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=" " />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Artist Developer Orator Public Speaker
            </motion.div>
            <div className="imageContainer">
                <img src="/me2.png" alt=" " />
            </div>
        </div>
    );
};

export default Hero;
