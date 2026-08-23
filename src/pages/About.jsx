import { motion } from "framer-motion";

import {
  FiCpu,
  FiDatabase,
  FiCloud,
  FiTerminal,
  FiActivity,
  FiServer,
  FiArrowUpRight,
  FiMapPin,
  FiCode,
} from "react-icons/fi";

import aboutAvatar from "../assets/avatar/about-avatar.png";

import "./About.css";

export default function About() {
  return (
    <main className="about-page">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="about-background">
        <div className="about-bg-image" />
        <div className="about-bg-overlay" />
        <div className="about-grid-overlay" />
        <div className="about-scanline" />
        <div className="about-noise" />
      </div>


      {/* =========================
          AMBIENT DATA ELEMENTS
      ========================= */}

      <div className="data-orbit orbit-left" />
      <div className="data-orbit orbit-right" />

      <motion.div
        className="floating-data data-one"
        animate={{
          y: [0, -12, 0],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        DATA_STREAM
        <span>01 10 01 11</span>
      </motion.div>

      <motion.div
        className="floating-data data-two"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        MODEL_STATUS
        <span>● ONLINE</span>
      </motion.div>


      {/* =========================
          PAGE HEADER
      ========================= */}

      <section className="about-header">

        <motion.div
          className="about-breadcrumb"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>02</span>

          <div />

          ABOUT ME
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          More than a
          <span> developer.</span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Curious mind. AI enthusiast. MLOps explorer.
          Builder of intelligent systems.
        </motion.p>

      </section>


      {/* =========================
          MAIN PROFILE
      ========================= */}

      <section className="about-main">


        {/* =========================
            LEFT — AVATAR
        ========================= */}

        <motion.div
          className="about-avatar-section"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="avatar-orbit">

            {/* rotating orbit */}
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />


            {/* orbit nodes */}
            <motion.div
              className="avatar-data-node node-a"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="avatar-data-node node-b"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            {/* Avatar glow */}

            <div className="avatar-glow" />


            {/* Avatar */}

            <motion.div
              className="main-about-avatar"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
            >

              <img
                src={aboutAvatar}
                alt="Jugal animated avatar"
              />

            </motion.div>


            {/* scanning ring */}

            <motion.div
              className="avatar-scan"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            {/* tiny tech labels */}

            <div className="avatar-label label-top">
              <FiCpu />
              AI_CORE
            </div>

            <div className="avatar-label label-bottom">
              <FiActivity />
              ONLINE
            </div>

          </div>


          {/* status */}

          <div className="avatar-status">

            <span />

            SYSTEM PROFILE ACTIVE

          </div>

        </motion.div>



        {/* =========================
            RIGHT — INTRO
        ========================= */}

        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >

          <div className="about-label">
            <FiCpu />
            WHO AM I?
          </div>


          <h2>
            Turning curiosity
            <br />
            into <span>intelligent systems.</span>
          </h2>


          <p>
            I'm Jugal, an IT student who enjoys exploring
            how technology can turn ideas and data into
            something useful.
          </p>


          <p>
            My biggest interests are Artificial Intelligence,
            Machine Learning and MLOps. I like understanding
            what happens behind intelligent applications —
            from data and models to the systems that make
            them usable in the real world.
          </p>


          <p>
            I’m naturally curious and enjoy learning by
            building. Rather than limiting myself to one
            technology, I like connecting different parts
            of the development ecosystem and seeing how
            they work together.
          </p>


          {/* PERSONAL INFO */}

          <div className="personal-info">

            <div className="personal-item">

              <FiMapPin />

              <div>
                <span>BASED IN</span>
                <strong>India</strong>
              </div>

            </div>


            <div className="personal-item">

              <FiCode />

              <div>
                <span>FOCUS</span>
                <strong>AI • ML • MLOps</strong>
              </div>

            </div>

          </div>


          {/* PERSONAL STATEMENT */}

          <div className="about-highlight">

            <span className="quote-mark">
              "
            </span>

            <div>

              <strong>
                Build things that make technology feel useful.
              </strong>

              <small>
                That's the mindset behind my work.
              </small>

            </div>

          </div>

        </motion.div>

      </section>



      {/* =========================
          CURRENTLY EXPLORING
      ========================= */}

      <section className="exploring-section">

        <div className="section-heading">

          <span>
            CURRENTLY EXPLORING
          </span>

          <h2>
            What's running in my
            <strong> brain.exe</strong>
          </h2>

        </div>


        <div className="exploring-grid">

          <ExploreCard
            icon={<FiCpu />}
            title="Artificial Intelligence"
            text="Understanding intelligent systems and practical AI applications."
          />

          <ExploreCard
            icon={<FiDatabase />}
            title="Machine Learning"
            text="Working with data, models, experimentation and prediction."
          />

          <ExploreCard
            icon={<FiCloud />}
            title="MLOps"
            text="Exploring the bridge between machine learning and production."
          />

          <ExploreCard
            icon={<FiTerminal />}
            title="Automation"
            text="Learning how software and infrastructure can work smarter."
          />

        </div>

      </section>



      {/* =========================
          MINI STATS
      ========================= */}

      <section className="about-stats">

        <Stat
          icon={<FiCpu />}
          number="AI"
          label="PRIMARY INTEREST"
        />

        <Stat
          icon={<FiActivity />}
          number="ML"
          label="CORE DOMAIN"
        />

        <Stat
          icon={<FiServer />}
          number="MLOps"
          label="CURRENT DIRECTION"
        />

        <Stat
          icon={<FiArrowUpRight />}
          number="∞"
          label="THINGS TO LEARN"
        />

      </section>

    </main>
  );
}



/* =========================================
   EXPLORING CARD
========================================= */

function ExploreCard({
  icon,
  title,
  text,
}) {
  return (
    <motion.div
      className="explore-card"
      whileHover={{
        y: -8,
      }}
    >

      <div className="explore-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <FiArrowUpRight className="explore-arrow" />

    </motion.div>
  );
}



/* =========================================
   STAT
========================================= */

function Stat({
  icon,
  number,
  label,
}) {
  return (
    <motion.div
      className="about-stat"
      whileHover={{
        y: -5,
      }}
    >

      <div className="stat-icon">
        {icon}
      </div>

      <strong>
        {number}
      </strong>

      <span>
        {label}
      </span>

    </motion.div>
  );
}