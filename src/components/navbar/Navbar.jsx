import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PriCodes
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/priyanshi-soni-246347224/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Ps1231">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@PriyanshiSoni-xi3km">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://medium.com/@sonipriyanshi.2410">
            <img src="/medium.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
