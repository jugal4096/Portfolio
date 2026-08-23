import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBuilding,
  FaLaptopCode,
  FaBrain,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDatabase,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import "./Education.css";

import trainingBackground from "../assets/backgrounds/education-training.png";

import wavingAvatar from "../assets/avatar/waving.png";

import msbshseLogo from "../assets/education/msbshse-logo.png";
import gpjalnaLogo from "../assets/education/gpjalna-logo.jpg";
import gecaLogo from "../assets/education/geca-logo.jpg";


/* =========================================================
   EDUCATION DATA
========================================================= */

const educationData = [

  {
    id: "01",

    stage: "FOUNDATION",

    year: "SSC",

    title: "Secondary School Certificate",

    institution:
      "Maharashtra State Board",

    location:
      "Maharashtra, India",

    description:
      "The foundation of my academic journey and the first layer of my learning system.",

    logo:
      msbshseLogo,

    website:
      "https://www.mahahsscboard.in/",

    icon:
      <FaGraduationCap />,

    color:
      "cyan",
  },


  {
    id: "02",

    stage: "ENGINEERING",

    year: "DIPLOMA",

    title: "Civil Engineering",

    institution:
      "Government Polytechnic, Jalna",

    location:
      "Jalna, Maharashtra",

    description:
      "My first engineering journey. Civil Engineering introduced me to technical thinking, design, systems and practical problem solving.",

    logo:
      gpjalnaLogo,

    website:
      "https://www.gpjalna.ac.in/",

    icon:
      <FaBuilding />,

    color:
      "purple",
  },


  {
    id: "03",

    stage: "TECHNOLOGY",

    year: "B.TECH",

    title: "Information Technology",

    institution:
      "Government College of Engineering, Chhatrapati Sambhajinagar",

    location:
      "Chhatrapati Sambhajinagar, Maharashtra",

    description:
      "My transition from physical infrastructure to digital infrastructure — programming, software engineering, databases and intelligent systems.",

    logo:
      gecaLogo,

    website:
      "https://geca.ac.in/",

    icon:
      <FaLaptopCode />,

    color:
      "blue",

    current:
      true,
  },


  {
    id: "04",

    stage: "INTELLIGENCE",

    year: "NOW",

    title: "AI • ML • MLOps",

    institution:
      "Self-Directed Learning & Projects",

    location:
      "Building intelligent systems",

    description:
      "Currently exploring machine learning, model training, deployment, automation, monitoring and production AI systems.",

    logo:
      null,

    website:
      null,

    icon:
      <FaBrain />,

    color:
      "green",

    current:
      true,
  },

];


/* =========================================================
   EDUCATION COMPONENT
========================================================= */

export default function Education() {

  return (

    <main
      className="education-page"
      style={{
        "--education-bg":
          `url(${trainingBackground})`,
      }}
    >

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="education-background">

        <div className="education-background-image" />

        <div className="education-background-dark" />

        <div className="education-grid" />

        <div className="aurora aurora-one" />

        <div className="aurora aurora-two" />

        <div className="data-chip chip-one">
          MODEL_TRAINING
        </div>

        <div className="data-chip chip-two">
          epoch: 0245
        </div>

        <div className="data-chip chip-three">
          accuracy: 98.76%
        </div>

        <div className="data-chip chip-four">
          pipeline: ACTIVE
        </div>

      </div>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="education-hero">

        <motion.div
          className="education-kicker"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <span className="pulse-dot" />

          EDUCATION // SYSTEM EVOLUTION

        </motion.div>


        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
        >

          How I
          <span> got here.</span>

        </motion.h1>


        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
          }}
        >

          Every stage added another layer —
          from academic foundations to engineering,
          software and intelligent systems.

        </motion.p>


        <div className="education-stats">

          <div>

            <strong>
              03
            </strong>

            <small>
              INSTITUTIONS
            </small>

          </div>


          <div>

            <strong>
              02
            </strong>

            <small>
              ENGINEERING PATHS
            </small>

          </div>


          <div>

            <strong>
              ∞
            </strong>

            <small>
              LEARNING
            </small>

          </div>

        </div>

      </section>


      {/* ===================================================
          AVATAR
      =================================================== */}

      <motion.div
        className="education-avatar"
        initial={{
          opacity: 0,
          scale: .7,
          x: 100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: .9,
          ease: "easeOut",
        }}
      >

        <div className="avatar-halo" />

        <div className="avatar-ring avatar-ring-one" />

        <div className="avatar-ring avatar-ring-two" />


        <motion.img
          src={wavingAvatar}
          alt="Jugal waving"
          animate={{
            y: [0, -12, 0],

            rotate:
              [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <div className="avatar-badge">

          <span />

          HELLO, VISITOR

        </div>

      </motion.div>


      {/* ===================================================
          TIMELINE
      =================================================== */}

      <section className="education-timeline">

        <div className="timeline">

          <div className="timeline-light" />

        </div>


        {educationData.map(
          (item, index) => (

            <motion.article
              key={item.id}

              className={
                `education-card ${item.color}`
              }

              initial={{
                opacity: 0,
                y: 70,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: .15,
              }}

              transition={{
                duration: .7,
                delay:
                  index * .12,
              }}
            >

              {/* NUMBER */}

              <div className="card-number">

                {item.id}

              </div>


              {/* =================================================
                  VISUAL SIDE
              ================================================= */}

              <div className="card-visual">

                <div className="visual-grid" />


                <div className="visual-glow" />


                {item.logo ? (

                  <motion.div
                    className="institution-logo-box"

                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                  >

                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                    />

                  </motion.div>

                ) : (

                  <motion.div
                    className="ml-symbol"
                    animate={{
                      rotate:
                        [0, 4, -4, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                  >

                    <FaBrain />

                  </motion.div>

                )}


                <div className="visual-orbit orbit-one" />

                <div className="visual-orbit orbit-two" />

                <div className="visual-orbit orbit-three" />


                <div className="visual-stage">

                  {item.stage}

                </div>


                <div className="visual-corner">

                  SYS_{item.id}

                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="card-content">

                <div className="card-meta">

                  <span>

                    <FaCalendarAlt />

                    {item.year}

                  </span>


                  {item.current && (

                    <span className="current">

                      <i />

                      CURRENT

                    </span>

                  )}

                </div>


                <h2>
                  {item.title}
                </h2>


                <h3>
                  {item.institution}
                </h3>


                <div className="location">

                  <FaMapMarkerAlt />

                  {item.location}

                </div>


                <p>
                  {item.description}
                </p>


                <div className="card-footer">

                  <div className="layer">

                    <FaDatabase />

                    LAYER_{item.id}

                  </div>


                  {item.website && (

                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      Official Website

                      <FaExternalLinkAlt />

                    </a>

                  )}

                </div>

              </div>

            </motion.article>

          )
        )}

      </section>


      {/* ===================================================
          END MESSAGE
      =================================================== */}

      <motion.section
        className="education-end"

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

        <div className="end-icon">

          <FaCode />

        </div>


        <div>

          <small>
            SYSTEM EVOLUTION
          </small>

          <h2>

            From
            <span> structures </span>
            to
            <span> intelligence.</span>

          </h2>

          <p>

            Civil Engineering gave me a systems mindset.
            Information Technology gave me the digital tools.
            AI and MLOps became the direction I'm building toward.

          </p>

        </div>

        <FaArrowRight className="end-arrow" />

      </motion.section>

    </main>

  );

}