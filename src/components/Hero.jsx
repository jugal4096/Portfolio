import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import avatar from "../assets/avatar/avatar.png";

export default function Hero() {
  return (
    <section className="hero">

      {/* =========================================
          LEFT CONTENT
      ========================================= */}

      <div className="hero-content">

        {/* STATUS */}

        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot" />

          AI LAB ONLINE

          <span className="status-arrow">
            ↗
          </span>
        </motion.div>


        {/* MINI TITLE */}

        <motion.div
          className="hero-mini-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          BUILD • TRAIN • DEPLOY • REPEAT
        </motion.div>


        {/* MAIN HEADING */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          Hey, I'm

          <br />

          <span>Jugal</span>

          <span className="hero-wave">
            👋
          </span>
        </motion.h1>


        {/* ROLE */}

        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >

          <span>
            I'm into
          </span>

          <strong>
            <Typewriter
              words={[
                "Artificial Intelligence.",
                "Machine Learning.",
                "MLOps.",
                "Data Science.",
                "Intelligent Systems.",
              ]}
              loop={0}
              cursor
              cursorStyle="▋"
              typeSpeed={60}
              deleteSpeed={35}
              delaySpeed={1300}
            />
          </strong>

        </motion.div>


        {/* DESCRIPTION */}

        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          IT student passionate about artificial
          intelligence, machine learning, automation,
          data and building intelligent systems for
          real-world problems.
        </motion.p>


        {/* =========================================
            BUTTONS
        ========================================= */}

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.75,
          }}
        >

          {/* EXPLORE */}

          <Link
            to="/about"
            className="hero-primary"
          >
            🚀 Explore Me
          </Link>


          {/* DOWNLOAD RESUME */}

          <a
            href="/Resume26_27.pdf"
            download="Resume26_27.pdf"
            className="hero-resume"
            aria-label="Download Jugal Pakhare Resume"
          >
            <span className="resume-icon">
              📄
            </span>

            <span>
              Download Resume
            </span>
          </a>

        </motion.div>


        {/* =========================================
            TECH STACK
        ========================================= */}

        <motion.div
          className="hero-tech"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >

          <span>Python</span>

          <span>AI / ML</span>

          <span>MLOps</span>

          <span>Data</span>

        </motion.div>

      </div>


      {/* =========================================
          RIGHT AVATAR
      ========================================= */}

      <div className="hero-avatar-area">

        {/* GLOW */}

        <div className="avatar-glow" />


        {/* ROTATING RING 1 */}

        <motion.div
          className="avatar-ring ring-one"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        {/* ROTATING RING 2 */}

        <motion.div
          className="avatar-ring ring-two"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        {/* AVATAR */}

        <motion.div
          className="avatar-container"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
        >

          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.04}
          >

            <motion.img
              src={avatar}
              alt="Jugal animated avatar"
              className="hero-avatar"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </Tilt>

        </motion.div>


        {/* =========================================
            AI CARD
        ========================================= */}

        <motion.div
          className="avatar-card ai-card"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <span>🧠</span>

          <div>
            <small>AI MODEL</small>
            <b>TRAINING</b>
          </div>

        </motion.div>


        {/* =========================================
            MLOPS CARD
        ========================================= */}

        <motion.div
          className="avatar-card mlops-card"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <span>⚙️</span>

          <div>
            <small>MLOPS</small>
            <b>PIPELINE ONLINE</b>
          </div>

        </motion.div>


        {/* =========================================
            PYTHON CARD
        ========================================= */}

        <motion.div
          className="avatar-card python-card"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <span>🐍</span>

          <div>
            <small>RUNTIME</small>
            <b>PYTHON</b>
          </div>

        </motion.div>

      </div>

    </section>
  );
}