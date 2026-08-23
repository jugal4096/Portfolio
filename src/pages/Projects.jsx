import { motion } from "framer-motion";

import {
  FaBrain,
  FaTrain,
  FaGraduationCap,
  FaGithub,
  FaExternalLinkAlt,
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaCode,
  FaGlobe,
  FaArrowRight,
  FaBolt,
  FaServer,
} from "react-icons/fa";

import projectsBackground from "../assets/backgrounds/projects-ai.png";
import projectsAvatar from "../assets/avatar/projects-avatar.png";

import populationImage from "../assets/projects/population-vision.png";
import trainImage from "../assets/projects/train-dispatch.png";
import sgpaImage from "../assets/projects/sgpa-calculator.png";

import "./Projects.css";


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "01",

    number: "01",

    category: "AI / DEMOGRAPHICS",

    title: "PopulationVision",

    subtitle: "AI Population Forecasting System",

    description:
      "An AI-powered demographic intelligence system that explores historical population trends, analyzes demographic patterns and forecasts future population using machine learning.",

    image: populationImage,

    icon: <FaBrain />,

    liveDemo:
      "https://population-vision-sbsk.vercel.app/",

    github:
      "https://github.com/jugal4096/PopulationVision",

    status: "LIVE",

    accent: "cyan",

    features: [
      "Population Forecasting",
      "Demographic Analysis",
      "Historical Trends",
      "ML Predictions",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
    ],
  },


  {
    id: "02",

    number: "02",

    category: "RAILWAY AI / DSS",

    title: "Smart Train Dispatch Intelligence",

    subtitle:
      "Train Crossing & Halt Decision Support System",

    description:
      "An intelligent railway decision-support system designed to predict train crossing situations, delays and operational decisions for smarter railway dispatch.",

    image: trainImage,

    icon: <FaTrain />,

    liveDemo:
      "https://railai-gold.vercel.app/",

    github:
      "https://github.com/jugal4096/MYtrain",

    status: "LIVE",

    accent: "purple",

    features: [
      "Crossing Prediction",
      "Train Halt Intelligence",
      "Railway DSS",
      "Predictive Analytics",
    ],

    technologies: [
      "Python",
      "AI / ML",
      "Decision Support",
    ],
  },


  {
    id: "03",

    number: "03",

    category: "EDTECH / WEB APP",

    title: "GECA SGPA Calculator",

    subtitle:
      "Academic Planning & Intelligence Platform",

    description:
      "A student-focused academic platform for calculating SGPA and CGPA, with an integrated AI chatbot and academic search experience.",

    image: sgpaImage,

    icon: <FaGraduationCap />,

    liveDemo:
      "https://jugalsgpa.netlify.app/",

    github:
      "https://github.com/jugal4096/SGPA-calculator-website",

    status: "LIVE",

    accent: "green",

    features: [
      "SGPA Calculator",
      "CGPA Calculator",
      "AI Chatbot",
      "Academic Search",
    ],

    technologies: [
      "JavaScript",
      "Firebase",
      "AI Integration",
    ],
  },
];


/* =========================================================
   FLOATING BACKGROUND DATA
========================================================= */

const floatingSymbols = [
  "01",
  "AI",
  "ML",
  "DATA",
  "DSS",
  "API",
  "MODEL",
  "DEPLOY",
  "TRAIN",
  "PREDICT",
  "0101",
  "PY",
];


/* =========================================================
   PROJECT PAGE
========================================================= */

export default function Projects() {

  return (
    <main
      className="projects-page"
      style={{
        "--projects-background": `url(${projectsBackground})`,
      }}
    >


      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div className="projects-background">

        <div className="projects-bg-image" />

        <div className="projects-bg-overlay" />

        <div className="projects-grid" />

        <div className="projects-glow projects-glow-one" />

        <div className="projects-glow projects-glow-two" />

        <div className="projects-scan-line" />


        {/* FLOATING DATA SYMBOLS */}

        <div className="floating-project-symbols">

          {floatingSymbols.map((symbol, index) => (

            <motion.span
              key={`${symbol}-${index}`}

              style={{
                left: `${(index * 17 + 5) % 94}%`,
                top: `${(index * 29 + 8) % 88}%`,
              }}

              animate={{
                y: [0, -15, 0],
                opacity: [0.12, 0.32, 0.12],
              }}

              transition={{
                duration: 4 + (index % 4),
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {symbol}
            </motion.span>

          ))}

        </div>


        {/* PARTICLES */}

        <div className="project-particles">

          {Array.from({ length: 35 }).map((_, index) => (

            <motion.span
              key={index}

              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 61) % 100}%`,
              }}

              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.2, 0.5],
              }}

              transition={{
                duration: 3 + (index % 4),
                repeat: Infinity,
                delay: index * 0.12,
              }}
            />

          ))}

        </div>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">


        {/* LEFT */}

        <motion.div
          className="projects-hero-content"

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

          <div className="projects-live-badge">

            <span />

            PROJECT LAB ONLINE

          </div>


          <div className="projects-eyebrow">

            <FaBolt />

            AI • DATA • SOFTWARE • REAL-WORLD SYSTEMS

          </div>


          <h1>

            Things I've

            <span>
              built.
            </span>

          </h1>


          <p className="projects-intro">

            A collection of systems I've built to explore
            artificial intelligence, machine learning, data,
            automation and practical problem solving.

          </p>


          {/* DOMAIN PILLS */}

          <div className="projects-domain-pills">

            <div>
              <FaBrain />
              Artificial Intelligence
            </div>

            <div>
              <FaChartLine />
              Data Intelligence
            </div>

            <div>
              <FaRobot />
              Automation
            </div>

            <div>
              <FaServer />
              Software Systems
            </div>

          </div>

        </motion.div>


        {/* ===================================================
            AVATAR AREA
        =================================================== */}

        <motion.div
          className="projects-avatar-area"

          initial={{
            opacity: 0,
            scale: 0.7,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >

          <div className="avatar-energy" />

          <div className="avatar-orbit orbit-one" />

          <div className="avatar-orbit orbit-two" />

          <div className="avatar-orbit orbit-three" />


          <motion.img
            src={projectsAvatar}
            alt="Jugal"
            className="projects-avatar"

            animate={{
              y: [0, -13, 0],
              rotate: [0, 1, -1, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* AI TAG */}

          <motion.div
            className="avatar-floating-tag avatar-tag-ai"

            animate={{
              y: [0, -9, 0],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >

            <FaBrain />

            AI ENGINE

          </motion.div>


          {/* DATA TAG */}

          <motion.div
            className="avatar-floating-tag avatar-tag-data"

            animate={{
              y: [0, 10, 0],
            }}

            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >

            <FaDatabase />

            DATA FLOW

          </motion.div>


          {/* STATUS */}

          <div className="avatar-build-status">

            <span />

            BUILD MODE

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          PROJECT STATISTICS
      ===================================================== */}

      <motion.section
        className="projects-statistics"

        initial={{
          opacity: 0,
          y: 25,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="project-stat">

          <strong>
            03
          </strong>

          <span>
            Featured Projects
          </span>

        </div>


        <div className="project-stat">

          <strong>
            AI
          </strong>

          <span>
            Core Direction
          </span>

        </div>


        <div className="project-stat">

          <strong>
            DSS
          </strong>

          <span>
            Decision Systems
          </span>

        </div>


        <div className="project-stat">

          <strong>
            ∞
          </strong>

          <span>
            Ideas to Build
          </span>

        </div>

      </motion.section>


      {/* =====================================================
          PROJECT SECTION HEADING
      ===================================================== */}

      <motion.div
        className="projects-section-heading"

        initial={{
          opacity: 0,
          y: 20,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="section-heading-label">

          <FaCode />

          SELECTED WORK

        </div>


        <h2>

          From idea

          <span>
            to system.
          </span>

        </h2>


        <p>
          Explore the projects, see them in action and
          dive into the source code.
        </p>

      </motion.div>


      {/* =====================================================
          PROJECT CARDS
      ===================================================== */}

      <section className="projects-list">


        {projects.map((project, index) => (

          <motion.article
            key={project.id}

            className={`project-card ${project.accent}`}

            initial={{
              opacity: 0,
              y: 55,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.12,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
          >


            {/* PROJECT NUMBER */}

            <div className="project-number">

              {project.number}

            </div>


            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="project-visual">


              <img
                src={project.image}
                alt={`${project.title} project`}
                className="project-thumbnail"
              />


              <div className="project-image-overlay" />


              <div className="project-image-gradient" />


              {/* CATEGORY */}

              <div className="project-category">

                {project.category}

              </div>


              {/* ICON */}

              <div className="project-icon">

                {project.icon}

              </div>


              {/* SCAN */}

              <div className="project-image-scan" />


              {/* CORNER MARKERS */}

              <span className="thumbnail-corner top-left" />

              <span className="thumbnail-corner top-right" />

              <span className="thumbnail-corner bottom-left" />

              <span className="thumbnail-corner bottom-right" />


              {/* IMAGE HUD */}

              <div className="project-image-hud">

                <span>
                  SYSTEM
                </span>

                <span>
                  {project.number}
                </span>

              </div>

            </div>


            {/* =================================================
                PROJECT CONTENT
            ================================================= */}

            <div className="project-content">


              {/* META */}

              <div className="project-meta">

                <span>
                  PROJECT_{project.number}
                </span>


                <span className="project-status">

                  <i />

                  {project.status}

                </span>

              </div>


              {/* TITLE */}

              <h2>
                {project.title}
              </h2>


              <h3>
                {project.subtitle}
              </h3>


              {/* DESCRIPTION */}

              <p className="project-description">

                {project.description}

              </p>


              {/* FEATURES */}

              <div className="project-features">

                {project.features.map((feature) => (

                  <span key={feature}>

                    <i />

                    {feature}

                  </span>

                ))}

              </div>


              {/* TECHNOLOGIES */}

              <div className="project-tech-stack">

                {project.technologies.map((technology) => (

                  <span key={technology}>

                    {technology}

                  </span>

                ))}

              </div>


              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="project-footer">


                <div className="project-system">

                  <FaCode />

                  PROJECT SYSTEM

                </div>


                <div className="project-actions">


                  {/* LIVE DEMO */}

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="project-button live-button"
                  >

                    <FaGlobe />

                    <span>
                      Live Demo
                    </span>

                    <FaExternalLinkAlt />

                  </a>


                  {/* GITHUB */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="project-button github-button"
                  >

                    <FaGithub />

                    <span>
                      GitHub
                    </span>

                    <FaExternalLinkAlt />

                  </a>

                </div>

              </div>

            </div>

          </motion.article>

        ))}

      </section>


      {/* =====================================================
          PROJECT FOOTER
      ===================================================== */}

      <motion.section
        className="projects-end"

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="projects-end-icon">

          <FaRobot />

        </div>


        <div className="projects-end-content">

          <span>
            NEXT BUILD
          </span>


          <h2>

            Turning real-world problems

            <strong>
              into intelligent systems.
            </strong>

          </h2>


          <p>
            More experiments, more models and more
            systems are on the way.
          </p>

        </div>


        <FaArrowRight className="projects-end-arrow" />

      </motion.section>


    </main>
  );
}