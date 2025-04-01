import "./contact.scss";
import { useRef,useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from 'emailjs-com';
emailjs.init('EIJ3A6LpCHyNTKp9_'); 

const variants = {
    initial: { y: 500, opacity: 0 },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.5, staggerChildren: 0.1 }
    },
};

const Contact = () => {
    const ref = useRef();
    const formRef= useRef();

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();
        
        console.log("📩 Form Submitted! Sending email...");
        
        emailjs
          .sendForm(
            'service_0w9lbjd',
            'template_exw2vog',
            formRef.current,
            'EIJ3A6LpCHyNTKp9_'
          )
          .then(
            (result) => {
              console.log(" Email sent successfully:", result);
              setSuccess(true);
            },
            (error) => {
              console.error("Email sending failed:", error);
              setError(true);
            }
          );
    };
    

    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Connect</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                   <br/> <span>naveen.bs2023@vitstudent.ac.in</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <br/><span>Bangalore, India</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <br/> <span>+91 8618 00 6797</span>
                </motion.div>
            </motion.div>

            <div className="formContainer">
            <motion.div
                className="mailSvg"
                initial={{ opacity: 1 }} 
                animate={{ opacity: 0 }} 
                transition={{ delay: 4, duration: 1 }}  >
    <svg 
        fill="none" 
        stroke="#ffbf00" 
        strokeWidth="2" 
        height="450px" 
        width="450px" 
        viewBox="0 0 191.232 191.232"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <motion.path
            d="M37.884,191.232c-2.385,0-3.82-0.153-4.188-0.198c-0.627-0.072-1.236-0.34-1.726-0.807c-0.021-0.02-0.042-0.041-0.062-0.061
            L17.36,175.619c-5.505-5.504-5.505-14.461,0-19.965l27.606-27.606c2.667-2.667,6.211-4.135,9.982-4.135s7.316,1.469,9.982,4.135
            l13.635,13.635c4.235-0.31,20.305-2.727,38.892-21.313c18.718-18.718,20.65-34.241,20.817-38.311L124.599,68.38
            c-5.505-5.504-5.505-14.46,0-19.965l27.606-27.606c5.504-5.505,14.461-5.505,19.965,0l14.547,14.547
            c0.02,0.019,0.038,0.038,0.056,0.057c0.001,0.001,0,0.001,0.004,0.004c0.459,0.481,0.727,1.077,0.805,1.692
            c0.318,2.358,5.36,46.423-50.8,102.583C89.531,186.943,50.487,191.232,37.884,191.232z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        <motion.path
            d="M50.667,96.167c-1.657,0-3-1.343-3-3c0-26.966,21.938-48.904,48.904-48.904c1.657,0,3,1.343,3,3s-1.343,3-3,3
            c-23.657,0-42.904,19.247-42.904,42.904C53.667,94.824,52.323,96.167,50.667,96.167z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />
        
        <motion.path
            d="M28.266,96.167c-1.657,0-3-1.343-3-3c0-39.317,31.987-71.305,71.305-71.305c1.657,0,3,1.343,3,3s-1.343,3-3,3
            c-36.009,0-65.305,29.295-65.305,65.305C31.266,94.824,29.923,96.167,28.266,96.167z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.path
            d="M6.403,96.167c-1.657,0-3-1.343-3-3C3.403,41.795,45.198,0,96.571,0c1.657,0,3,1.343,3,3s-1.343,3-3,3
            C48.506,6,9.403,45.103,9.403,93.167C9.403,94.824,8.06,96.167,6.403,96.167z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 1.5 }}
        />
    </svg>
</motion.div>


                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail} 
                 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }}>
                    <input type="text" placeholder="Name" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button type="submit">Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;
