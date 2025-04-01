import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "Python Project",
        img: "/OIP.jpeg",
        desc: "An advanced Python project for day-to-day activities can include an AI-powered personal assistant that automates tasks like scheduling, reminders, and email management. It can integrate with APIs to fetch real-time weather updates, news, and traffic conditions for efficient planning. Machine learning can be used to analyze user habits and provide personalized recommendations for productivity and wellness. Additionally, a chatbot with natural language processing (NLP) ",
    },
    {
        id: 2,
        title: "Web Project",
        img: "/webpj.png",
        desc: "This project is a modern, fully responsive portfolio website built using React, featuring smooth parallax scrolling, interactive animations, and dynamic content transitions. The website showcases projects, skills, experience, and contact details in an engaging and visually appealing manner. It utilizes Framer Motion for animations, Tailwind CSS for styling, and React Intersection Observer for lazy loading and smooth reveals. The homepage includes a hero section with animated text and background effects",
    },
    {
        id: 3,
        title: "Quantum Computing and Classifiers",
        img: "/qp.jpg",
        desc: "Quantum computing is revolutionizing machine learning by introducing faster optimization algorithms and superior feature selection techniques. Advanced methods such as Quantum Approximate Optimization Algorithm (QAOA) enhance combinatorial optimization problems, while Quantum Variational Classifiers (VQC) improve classification tasks by leveraging quantum entanglement and superposition. Additionally, Quantum Boltzmann Machines (QBM) and Quantum Principal Component Analysis (QPCA) enable efficient feature extraction.",
    },
];

const Single = ({item}) =>{

    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref, 
        offset: ["start end","start center"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-100,100]);
    return ( 
        <section >
            <div className="container">
                <div className="wrapper">
                    
                <img src={item.img} alt="" ref={ref} />
           
                <motion.div className="textContainer" style={ { y }}>
                    <h2 style={{y}}>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset: ["end end ", "start start"],

    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 30,
    })


    return (
     <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
        );
    
};

export default Portfolio