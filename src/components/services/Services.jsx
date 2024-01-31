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
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Build scalable customized Web applications for 
          <br /> startups, e-commerce brands & small businesses
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Creative </motion.b> Concepts
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Endeavors.
          </h1>
          
          <button>WHAT I DO?</button>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web-Development</h2>
          <p>
          As a web developer, I specialize in creating visually appealing & user-friendly websites. 
          My focus is on crafting intuitive interfaces that enhance the overall user experience. 
          Leveraging the latest technologies and design principles to ensure that websites look 
          stunning & function seamlessly.</p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Scrapping</h2>
          <p>
          Skilled in extracting pertinent data from diverse online sources, my web scraping proficiency ensures access to relevant information for analysis, aiding in staying abreast of industry trends and competitor activities.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Research & Analysis</h2>
          <p>
          Proficient in uncovering valuable insights, I contribute to informed decision-making by conducting thorough data analysis, whether it be in understanding market trends, user behavior, or performance metrics.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Technical Writer</h2>
          <p>
          As a technical writer on Medium, I simplify complex technical concepts, making them accessible to a broader audience. Through articles, I bridge the gap between intricate details and a wider readership, sharing insights from the digital world.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
