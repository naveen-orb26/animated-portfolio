import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar></Sidebar>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale: 0.5}} 
            animate={{opacity:1, scale: 1}} 
            transition={{duration:0.5}}>Naveen</motion.span>
        <div className ="social" >
            <a href="https://www.facebook.com/login.php"><img src="/facebook.png" alt=""/></a>  
            <a href="https://github.com/naveen-orb26"><img src="/github.png" alt=""/></a>
            <a href="https://www.instagram.com/2_naveen5/"><img src="/instagram.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/naveen-b-s"><img src="/linkedIn.png" alt=""/></a>
        </div>
    </div>
</div>

    )
}

export default Navbar