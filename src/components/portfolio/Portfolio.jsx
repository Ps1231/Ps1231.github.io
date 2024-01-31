import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "DBGeniePlus: ",
    img: "/db.webp",
    desc: "Transforming Data Management with Python: With my Python project, you can automatically create and populate databases using YAML configuration file. Specify database details, table structure and no of entries to be inserted in YAML file using given template, and watch the script work its magic—creating the database schema and filling tables with simulated data. It's a time-saving tool for setting up and testing databases during development. Let's connect to explore how this project can enhance your data management and testing workflows. ",
    link:'https://github.com/Ps1231/DBGeniePlus'
  },
  {
    id: 2,
    title: "ShareSpell",
    img: "/share.avif",
    desc: "ShareSpell is a dynamic platform fostering collective learning and knowledge sharing. Users register, create personalized profiles, and contribute through insightful blogs and suggestions. Admins ensure content quality with moderation, and the platform features categorized, tagged posts with voting. Interactive comments encourage discussions, and user-friendly post management provides contributors control. Admins organize content with category creation. ShareSpell is where minds converge for a collective masterpiece of shared wisdom.    ",
    link:'https://github.com/Ps1231/Resource_Sharing_App'
  },
  {
    id: 3,
    title: "PharmaComparer",
    img: "/web.jpg",
    desc: "PharmaComparer is a cutting-edge project designed to streamline the process of accessing and comparing pharmaceutical products from both local pharmacies and online platforms like NetMeds. By scraping data, the platform offers users valuable insights into pricing, availability, and specifications, empowering them to make informed healthcare decisions. With its user-friendly interface and real-time updates, PharmaComparer revolutionizes the way individuals navigate and evaluate medication options, ensuring transparency and accessibility in the pharmaceutical landscape.",
    link:''
  },
  {
    id: 4,
    title: "Technical Blogs",
    img: "/blog.jpeg",
    desc: "As a technical writer on Medium, I leverage my communication skills to translate complex technical concepts into easily digestible articles. Whether it's explaining coding practices, reviewing emerging technologies, or sharing insights from the digital world, I aim to make technical information accessible to a broader audience. My Medium publications serve as a bridge between intricate technical details and a wider readership.",
    link:'https://medium.com/@sonipriyanshi.2410'
  },
  {
    id: 5,
    title: "Youtube Academy",
    img: "/channel.png",
    desc: "Creator of informative and engaging YouTube tutorials, specializing in numerical data analysis and fundamental data science concepts.",
    link:'https://www.youtube.com/@PriyanshiSoni-xi3km'
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const handleCheckout = () => {
    window.location.href = item.link;
  };


  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleCheckout}>checkout</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
