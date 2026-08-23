import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaLinux,
  FaCloud,
  FaCode,
  FaServer,
  FaChartLine,
  FaMicrochip,
  FaCogs,
  FaUsers,
  FaUserTie,
  FaTasks,
  FaLightbulb,
  FaClock,
  FaComments,
  FaFileAlt,
  FaHandshake,
  FaBullseye,
  FaProjectDiagram,
} from "react-icons/fa";

import skillsAvatar from "../assets/avatar/skills-avatar.png";
import skillsBackground from "../assets/backgrounds/skills-ai-robotics.png";

import "./Skills.css";


/* =========================================================
   SKILL DATA
========================================================= */

const skillSections = [
  {
    id: "technical",
    number: "01",
    title: "Technical Skills",
    subtitle: "BUILD • ENGINEER • DEPLOY",
    description:
      "My technical foundation covers software development, artificial intelligence, machine learning, data, databases and modern deployment workflows.",

    groups: [
      {
        title: "Full Stack Development",
        icon: <FaCode />,
        accent: "cyan",
        skills: [
          { name: "HTML / CSS", icon: <FaCode />, level: "Strong" },
          { name: "JavaScript", icon: <FaCode />, level: "Working" },
          { name: "React", icon: <FaReact />, level: "Working" },
          { name: "Node.js", icon: <FaNodeJs />, level: "Working" },
          { name: "Express.js", icon: <FaServer />, level: "Working" },
          { name: "REST APIs", icon: <FaServer />, level: "Working" },
        ],
      },

      {
        title: "Software Engineering",
        icon: <FaCogs />,
        accent: "purple",
        skills: [
          { name: "C++", icon: <FaCode />, level: "Strong" },
          { name: "Python", icon: <FaPython />, level: "Strong" },
          { name: "OOP", icon: <FaCode />, level: "Strong" },
          { name: "Git", icon: <FaCode />, level: "Working" },
          { name: "GitHub", icon: <FaGithub />, level: "Working" },
          { name: "Testing", icon: <FaCogs />, level: "Learning" },
        ],
      },

      {
        title: "Machine Learning",
        icon: <FaBrain />,
        accent: "green",
        skills: [
          { name: "Scikit-learn", icon: <FaBrain />, level: "Working" },
          { name: "Regression", icon: <FaChartLine />, level: "Working" },
          { name: "Classification", icon: <FaBrain />, level: "Working" },
          { name: "Feature Engineering", icon: <FaCogs />, level: "Working" },
          { name: "Model Evaluation", icon: <FaChartLine />, level: "Working" },
        ],
      },

      {
        title: "Deep Learning",
        icon: <FaMicrochip />,
        accent: "pink",
        skills: [
          { name: "Neural Networks", icon: <FaBrain />, level: "Learning" },
          { name: "TensorFlow", icon: <FaMicrochip />, level: "Learning" },
          { name: "PyTorch", icon: <FaMicrochip />, level: "Learning" },
          { name: "Model Training", icon: <FaChartLine />, level: "Working" },
          { name: "Computer Vision", icon: <FaMicrochip />, level: "Learning" },
        ],
      },

      {
        title: "MLOps",
        icon: <FaRobot />,
        accent: "orange",
        skills: [
          { name: "Docker", icon: <FaDocker />, level: "Working" },
          { name: "MLflow", icon: <FaRobot />, level: "Learning" },
          { name: "CI / CD", icon: <FaCogs />, level: "Learning" },
          { name: "Model Deployment", icon: <FaServer />, level: "Learning" },
          { name: "Monitoring", icon: <FaChartLine />, level: "Learning" },
        ],
      },

      {
        title: "Data & Analytics",
        icon: <FaChartLine />,
        accent: "blue",
        skills: [
          { name: "NumPy", icon: <FaCode />, level: "Strong" },
          { name: "Pandas", icon: <FaDatabase />, level: "Strong" },
          { name: "Data Visualization", icon: <FaChartLine />, level: "Working" },
          { name: "Exploratory Data Analysis", icon: <FaChartLine />, level: "Working" },
          { name: "Statistics", icon: <FaChartLine />, level: "Working" },
        ],
      },

      {
        title: "Databases",
        icon: <FaDatabase />,
        accent: "cyan",
        skills: [
          { name: "SQL", icon: <FaDatabase />, level: "Strong" },
          { name: "MySQL", icon: <FaDatabase />, level: "Working" },
          { name: "MongoDB", icon: <FaDatabase />, level: "Working" },
          { name: "PostgreSQL", icon: <FaDatabase />, level: "Learning" },
          { name: "Database Design", icon: <FaDatabase />, level: "Working" },
        ],
      },

      {
        title: "Cloud & DevOps",
        icon: <FaCloud />,
        accent: "purple",
        skills: [
          { name: "Linux", icon: <FaLinux />, level: "Working" },
          { name: "Docker", icon: <FaDocker />, level: "Working" },
          { name: "Cloud Basics", icon: <FaCloud />, level: "Learning" },
          { name: "Deployment", icon: <FaServer />, level: "Working" },
          { name: "Version Control", icon: <FaGithub />, level: "Working" },
        ],
      },
    ],
  },


  /* =======================================================
     MANAGERIAL
  ======================================================= */

  {
    id: "managerial",
    number: "02",
    title: "Managerial Skills",
    subtitle: "PLAN • ORGANIZE • LEAD",
    description:
      "Skills that help turn technical ideas into structured work, coordinate tasks and keep projects moving toward clear goals.",

    groups: [
      {
        title: "Project Management",
        icon: <FaProjectDiagram />,
        accent: "purple",
        skills: [
          { name: "Project Planning", icon: <FaTasks />, level: "Strong" },
          { name: "Task Management", icon: <FaTasks />, level: "Strong" },
          { name: "Goal Setting", icon: <FaBullseye />, level: "Strong" },
          { name: "Prioritization", icon: <FaCogs />, level: "Working" },
        ],
      },

      {
        title: "Leadership",
        icon: <FaUserTie />,
        accent: "cyan",
        skills: [
          { name: "Team Coordination", icon: <FaUsers />, level: "Working" },
          { name: "Decision Making", icon: <FaBullseye />, level: "Working" },
          { name: "Responsibility", icon: <FaUserTie />, level: "Strong" },
          { name: "Initiative", icon: <FaLightbulb />, level: "Strong" },
        ],
      },

      {
        title: "Problem Solving",
        icon: <FaLightbulb />,
        accent: "orange",
        skills: [
          { name: "Analytical Thinking", icon: <FaBrain />, level: "Strong" },
          { name: "Critical Thinking", icon: <FaLightbulb />, level: "Strong" },
          { name: "Debugging", icon: <FaCogs />, level: "Working" },
          { name: "Decision Analysis", icon: <FaChartLine />, level: "Working" },
        ],
      },

      {
        title: "Time Management",
        icon: <FaClock />,
        accent: "green",
        skills: [
          { name: "Planning", icon: <FaTasks />, level: "Strong" },
          { name: "Deadline Management", icon: <FaClock />, level: "Working" },
          { name: "Prioritization", icon: <FaBullseye />, level: "Working" },
          { name: "Consistency", icon: <FaCogs />, level: "Strong" },
        ],
      },
    ],
  },


  /* =======================================================
     COMMUNICATION
  ======================================================= */

  {
    id: "communication",
    number: "03",
    title: "Communication Skills",
    subtitle: "CONNECT • EXPLAIN • COLLABORATE",
    description:
      "The ability to communicate technical ideas clearly, document work and collaborate effectively with different people.",

    groups: [
      {
        title: "English Communication",
        icon: <FaComments />,
        accent: "cyan",
        skills: [
          {
            name: "Written Communication",
            icon: <FaFileAlt />,
            level: "Working",
          },
          {
            name: "Verbal Communication",
            icon: <FaComments />,
            level: "Working",
          },
          {
            name: "Professional English",
            icon: <FaComments />,
            level: "Working",
          },
        ],
      },

      {
        title: "Presentation",
        icon: <FaComments />,
        accent: "purple",
        skills: [
          {
            name: "Technical Presentation",
            icon: <FaComments />,
            level: "Working",
          },
          {
            name: "Demo Delivery",
            icon: <FaCode />,
            level: "Working",
          },
          {
            name: "Visual Explanation",
            icon: <FaChartLine />,
            level: "Working",
          },
        ],
      },

      {
        title: "Documentation",
        icon: <FaFileAlt />,
        accent: "green",
        skills: [
          {
            name: "Technical Documentation",
            icon: <FaFileAlt />,
            level: "Working",
          },
          {
            name: "Project Documentation",
            icon: <FaFileAlt />,
            level: "Strong",
          },
          {
            name: "README Writing",
            icon: <FaGithub />,
            level: "Working",
          },
        ],
      },

      {
        title: "Collaboration",
        icon: <FaHandshake />,
        accent: "pink",
        skills: [
          {
            name: "Team Collaboration",
            icon: <FaUsers />,
            level: "Working",
          },
          {
            name: "Active Listening",
            icon: <FaComments />,
            level: "Working",
          },
          {
            name: "Knowledge Sharing",
            icon: <FaHandshake />,
            level: "Working",
          },
        ],
      },
    ],
  },
];


/* =========================================================
   LEVEL CLASS
========================================================= */

const levelClass = (level) => {
  if (level === "Strong") return "strong";

  if (level === "Working") return "working";

  return "learning";
};


/* =========================================================
   SKILLS PAGE
========================================================= */

export default function Skills() {
  return (
    <main
      className="skills-page"
      style={{
        "--skills-background": `url(${skillsBackground})`,
      }}
    >

      {/* BACKGROUND */}

      <div className="skills-bg">

        <div className="skills-bg-image" />

        <div className="skills-bg-overlay" />

        <div className="skills-grid-bg" />

        <div className="ambient-glow glow-one" />

        <div className="ambient-glow glow-two" />

        <div className="scan-line" />

        {Array.from({ length: 28 }).map((_, index) => (
          <motion.span
            key={index}
            className="background-node"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 19) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.12,
            }}
          />
        ))}

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="skills-hero">

        <motion.div
          className="skills-intro"
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

          <div className="system-pill">
            <span />
            SKILL MATRIX ONLINE
          </div>


          <div className="hero-mini-label">
            <FaMicrochip />
            TECHNICAL • MANAGERIAL • COMMUNICATION
          </div>


          <h1>
            Skills that turn
            <span> ideas into systems.</span>
          </h1>


          <p>
            A multidimensional skill set built around technology,
            problem solving, project execution and clear communication.
          </p>


          <div className="skill-focus-row">

            <div>
              <FaBrain />
              <span>AI / ML</span>
            </div>

            <div>
              <FaRobot />
              <span>MLOps</span>
            </div>

            <div>
              <FaCode />
              <span>Engineering</span>
            </div>

            <div>
              <FaUsers />
              <span>Leadership</span>
            </div>

          </div>


          <div className="skills-terminal">

            <div className="terminal-bar">

              <i />
              <i />
              <i />

              <span>
                jugal@portfolio ~ skills
              </span>

            </div>


            <div className="terminal-content">

              <span className="terminal-green">
                $
              </span>

              <span>
                loading_skill_matrix()
              </span>

              <strong>
                ✓ READY
              </strong>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            AVATAR
        ================================================= */}

        <motion.div
          className="skills-avatar-zone"
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

          <div className="avatar-halo" />

          <div className="avatar-orbit orbit-one" />

          <div className="avatar-orbit orbit-two" />

          <div className="avatar-orbit orbit-three" />

          <div className="orbit-dot dot-one" />

          <div className="orbit-dot dot-two" />

          <div className="orbit-dot dot-three" />


          <motion.img
            src={skillsAvatar}
            alt="Jugal animated avatar"
            className="skills-avatar"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          <motion.div
            className="avatar-floating-card card-ai"
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FaBrain />
            <span>AI</span>
          </motion.div>


          <motion.div
            className="avatar-floating-card card-mlops"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            <FaRobot />
            <span>MLOps</span>
          </motion.div>


          <motion.div
            className="avatar-floating-card card-code"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <FaCode />
            <span>BUILD</span>
          </motion.div>


          <div className="avatar-online">
            <span />
            SKILL ENGINE ACTIVE
          </div>

        </motion.div>

      </section>


      {/* =====================================================
          QUICK OVERVIEW
      ===================================================== */}

      <section className="skill-overview">

        <div>
          <strong>03</strong>
          <span>Skill Dimensions</span>
        </div>

        <div>
          <strong>20+</strong>
          <span>Technology Areas</span>
        </div>

        <div>
          <strong>AI</strong>
          <span>Primary Focus</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Learning Mindset</span>
        </div>

      </section>


      {/* =====================================================
          SKILL SECTIONS
      ===================================================== */}

      <section className="skills-content">

        {skillSections.map((section) => (

          <motion.section
            key={section.id}
            className={`skill-dimension ${section.id}`}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="dimension-heading">

              <div className="dimension-number">
                {section.number}
              </div>

              <div>

                <span className="dimension-code">
                  {section.subtitle}
                </span>

                <h2>
                  {section.title}
                </h2>

                <p>
                  {section.description}
                </p>

              </div>

            </div>


            <div className="skill-group-grid">

              {section.groups.map((group, index) => (

                <motion.article
                  key={group.title}
                  className={`skill-group-card ${group.accent}`}
                  whileHover={{
                    y: -7,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <div className="card-glow" />


                  <div className="group-top">

                    <div className="group-icon">
                      {group.icon}
                    </div>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  <h3>
                    {group.title}
                  </h3>


                  <div className="group-skills">

                    {group.skills.map((skill) => (

                      <div
                        className="group-skill"
                        key={skill.name}
                      >

                        <div className="group-skill-name">

                          <span>
                            {skill.icon || <FaCode />}
                          </span>

                          {skill.name}

                        </div>


                        <small
                          className={levelClass(skill.level)}
                        >
                          {skill.level}
                        </small>

                      </div>

                    ))}

                  </div>


                  <div className="group-footer">

                    <span>
                      CAPABILITY
                    </span>

                    <div>
                      <i />
                      ACTIVE
                    </div>

                  </div>

                </motion.article>

              ))}

            </div>

          </motion.section>

        ))}

      </section>


      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <motion.section
        className="skills-final"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
      >

        <div className="final-icon">
          <FaMicrochip />
        </div>


        <div>

          <span>
            CURRENT MINDSET
          </span>

          <h2>
            Learn → Build → Deploy → Improve
          </h2>

          <p>
            I believe skills become valuable when they are
            applied to real problems, turned into working systems
            and continuously improved.
          </p>

        </div>

      </motion.section>

    </main>
  );
}