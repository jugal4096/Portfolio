import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaCode,
  FaBrain,
  FaRobot,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

import { useState } from "react";

import contactAvatar from "../assets/avatar/contact-avatar.png";

import "./Contact.css";


const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "jugalpkhr@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };


  return (
    <main className="contact-page">

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="contact-atmosphere">

        <div className="contact-orb orb-cyan" />

        <div className="contact-orb orb-purple" />

        <div className="contact-orb orb-green" />

        <div className="contact-grid" />

        <div className="contact-scan-line" />


        {/* floating particles */}

        <div className="contact-particles">

          {Array.from({ length: 35 }).map((_, index) => (
            <motion.span
              key={index}
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 43) % 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.7, 0.1],
                scale: [0.6, 1.2, 0.6],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3 + (index % 4),
                repeat: Infinity,
                delay: index * 0.15,
              }}
            />
          ))}

        </div>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <motion.div
          className="contact-copy"
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

          <div className="contact-status">

            <span />

            OPEN TO CONNECT

          </div>


          <div className="contact-eyebrow">

            <FaBrain />

            AI • MLOps • SOFTWARE • COLLABORATION

          </div>


          <h1>
            Let's build
            <span> something.</span>
          </h1>


          <p>
            Whether you want to discuss a project, collaborate on
            an idea, talk about AI, or simply say hello — my inbox
            is open.
          </p>


          <div className="contact-mini-stats">

            <div>
              <FaRobot />
              <span>AI / ML</span>
            </div>

            <div>
              <FaCode />
              <span>MLOps</span>
            </div>

            <div>
              <FaPaperPlane />
              <span>Open to Connect</span>
            </div>

          </div>

        </motion.div>


        {/* =====================================================
            AVATAR
        ===================================================== */}

        <motion.div
          className="contact-avatar-zone"
          initial={{
            opacity: 0,
            scale: 0.75,
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

          <div className="contact-avatar-glow" />

          <div className="contact-ring ring-a" />

          <div className="contact-ring ring-b" />

          <div className="contact-ring ring-c" />


          <motion.img
            src={contactAvatar}
            alt="Jugal contact avatar"
            className="contact-avatar"
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* floating labels */}

          <motion.div
            className="contact-floating-tag tag-message"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FaEnvelope />
            LET'S TALK
          </motion.div>


          <motion.div
            className="contact-floating-tag tag-ai"
            animate={{
              y: [0, 9, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            <FaBrain />
            AI BUILDER
          </motion.div>


          <div className="contact-avatar-status">
            <span />
            AVAILABLE
          </div>

        </motion.div>

      </section>


      {/* =====================================================
          CONTACT COMMAND CENTER
      ===================================================== */}

      <section className="contact-command-center">

        <div className="command-heading">

          <span>
            <FaPaperPlane />
            CONTACT CHANNELS
          </span>

          <h2>
            Choose your <strong>way in.</strong>
          </h2>

          <p>
            Fastest route: email. For professional networking,
            connect with me on LinkedIn. To explore what I build,
            check out my GitHub.
          </p>

        </div>


        {/* =====================================================
            CONTACT CARDS
        ===================================================== */}

        <div className="contact-cards">

          {/* EMAIL */}

          <motion.article
            className="contact-card email-card"
            whileHover={{
              y: -8,
            }}
          >

            <div className="contact-card-icon">

              <FaEnvelope />

            </div>


            <div className="contact-card-meta">

              <span>
                PRIMARY CHANNEL
              </span>

              <small>
                EMAIL
              </small>

            </div>


            <h3>
              Drop me an email.
            </h3>


            <p>
              Best for project discussions, opportunities,
              collaboration and anything that needs a proper
              conversation.
            </p>


            <div className="contact-action-row">

              <a
                href={`mailto:${email}`}
                className="contact-action primary"
              >
                <FaEnvelope />
                Email Me
                <FaExternalLinkAlt />
              </a>


              <button
                type="button"
                className="copy-email-button"
                onClick={copyEmail}
                title="Copy email address"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>

            </div>


            <div className="contact-address">
              {email}
            </div>

          </motion.article>


          {/* LINKEDIN */}

          <motion.article
            className="contact-card linkedin-card"
            whileHover={{
              y: -8,
            }}
          >

            <div className="contact-card-icon">

              <FaLinkedin />

            </div>


            <div className="contact-card-meta">

              <span>
                PROFESSIONAL NETWORK
              </span>

              <small>
                LINKEDIN
              </small>

            </div>


            <h3>
              Connect professionally.
            </h3>


            <p>
              Follow my professional journey, projects,
              learning progress and career updates.
            </p>


            <a
              href="https://www.linkedin.com/in/jugal-pakhare-a58653359/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action linkedin-action"
            >
              <FaLinkedin />
              View LinkedIn
              <FaExternalLinkAlt />
            </a>


            <div className="contact-card-footer">
              <span>
                jugal-pakhare
              </span>

              <FaArrowRight />
            </div>

          </motion.article>


          {/* GITHUB */}

          <motion.article
            className="contact-card github-card"
            whileHover={{
              y: -8,
            }}
          >

            <div className="contact-card-icon">

              <FaGithub />

            </div>


            <div className="contact-card-meta">

              <span>
                BUILD ARCHIVE
              </span>

              <small>
                GITHUB
              </small>

            </div>


            <h3>
              Explore what I build.
            </h3>


            <p>
              Browse my repositories, experiments, applications
              and machine-learning projects.
            </p>


            <a
              href="https://github.com/jugal4096"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action github-action"
            >
              <FaGithub />
              Open GitHub
              <FaExternalLinkAlt />
            </a>


            <div className="contact-card-footer">
              <span>
                github.com/jugal4096
              </span>

              <FaArrowRight />
            </div>

          </motion.article>

        </div>

      </section>


      {/* =====================================================
          QUICK CONTACT STRIP
      ===================================================== */}

      <motion.section
        className="contact-strip"
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

        <div className="strip-icon">
          <FaMapMarkerAlt />
        </div>


        <div className="strip-content">

          <span>
            CURRENT BASE
          </span>

          <strong>
            India
          </strong>

        </div>


        <div className="strip-divider" />


        <div className="strip-icon">
          <FaCode />
        </div>


        <div className="strip-content">

          <span>
            FOCUS
          </span>

          <strong>
            AI / ML + MLOps
          </strong>

        </div>


        <div className="strip-divider" />


        <div className="strip-icon">
          <FaRobot />
        </div>


        <div className="strip-content">

          <span>
            MODE
          </span>

          <strong>
            BUILDING
          </strong>

        </div>

      </motion.section>


      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <motion.section
        className="contact-final"
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
      >

        <div className="final-pulse" />

        <span>
          READY WHEN YOU ARE
        </span>

        <h2>
          Have an idea?
          <strong>
            Let's talk.
          </strong>
        </h2>

        <a
          href={`mailto:${email}`}
          className="final-contact-button"
        >
          <FaPaperPlane />
          Start a conversation
          <FaArrowRight />
        </a>

      </motion.section>

    </main>
  );
};

export default Contact;