import "./techCarousel.scss";
import { useEffect, useRef } from "react";

const techStacks = [
    '/python.svg', '/c.png', '/cpp.svg', '/java.svg', '/mysql.svg',
    '/html.svg', '/css.svg', '/js.png', '/react.svg', '/node.svg', '/flutter.svg'
];

const TechCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1;
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(scroll, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tech-carousel-container">
            <h2>Familiar Tech Stacks</h2>
            <div className="tech-carousel" ref={scrollRef}>
                <div className="scroll-content">
                    {techStacks.concat(techStacks).map((logo, index) => (
                        <img key={index} src={logo} alt="Tech Logo" className="tech-logo" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechCarousel;
