import {
  FaHardHat,
  FaShieldAlt,
  FaTrain,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaIndustry,
  FaArrowRight,
  FaRoute,
} from "react-icons/fa";

import "./Experience.css";

const Experience = () => {
  return (
    <main className="experience-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="experience-bg" />
      <div className="experience-bg-overlay" />
      <div className="experience-grid" />

      {/* animated atmosphere */}
      <div className="experience-glow glow-one" />
      <div className="experience-glow glow-two" />

      {/* particles */}
      <div className="experience-particles">
        {Array.from({ length: 35 }).map((_, index) => (
          <span
            key={index}
            style={{
              "--x": `${(index * 31) % 100}%`,
              "--y": `${(index * 47) % 100}%`,
              "--delay": `${(index % 8) * 0.45}s`,
              "--size": `${2 + (index % 3)}px`,
            }}
          />
        ))}
      </div>


      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="experience-intro">

        <div className="experience-status">
          <span className="status-light" />
          CAREER TIMELINE
        </div>

        <h1>
          Engineering my
          <span> next chapter.</span>
        </h1>

        <p>
          My professional journey began in large-scale infrastructure,
          where engineering met responsibility, safety and real-world
          problem solving.
        </p>

        <div className="intro-line">
          <span />
          <small>ONE EXPERIENCE · ONE FOUNDATION · MANY POSSIBILITIES</small>
          <span />
        </div>

      </section>


      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className="experience-timeline">

        <div className="timeline-track">
          <div className="timeline-progress" />
        </div>


        {/* TIMELINE NODE */}

        <div className="career-node">

          <div className="node-ring ring-one" />
          <div className="node-ring ring-two" />

          <div className="node-core">
            <FaHardHat />
          </div>

        </div>


        {/* =================================================
            EXPERIENCE CARD
        ================================================= */}

        <article className="experience-card">

          {/* animated scan */}
          <div className="card-scan" />


          {/* LEFT CONTENT */}

          <div className="experience-content">

            <div className="experience-label">
              <FaIndustry />
              PROFESSIONAL EXPERIENCE
            </div>


            <div className="experience-date">

              <FaCalendarAlt />

              <span>
                OCT 2023 — JUL 2024
              </span>

            </div>


            <h2>
              Diploma Engineering
              <span> Trainee</span>
            </h2>


            <h3>
              Delhi–Meerut RRTS Corridor
            </h3>


            <div className="role-location">

              <div>
                <FaMapMarkerAlt />
                Delhi – Meerut, Uttar Pradesh
              </div>

              <div>
                <FaShieldAlt />
                EHS Trainee
              </div>

            </div>


            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <div className="experience-text">

              <p>
                I worked as a Diploma Engineering Trainee in the
                Environment, Health & Safety domain on the
                Delhi–Meerut Regional Rapid Transit System corridor.
              </p>

              <p>
                This was my first exposure to a large-scale
                engineering environment, giving me practical
                understanding of site operations, safety awareness,
                engineering discipline and working within a
                structured project environment.
              </p>

            </div>


            {/* =================================================
                RESPONSIBILITY TAGS
            ================================================= */}

            <div className="responsibility-title">
              <span />
              EXPERIENCE FOCUS
            </div>


            <div className="responsibility-grid">

              <div className="responsibility-item">
                <FaShieldAlt />
                <div>
                  <strong>EHS</strong>
                  <small>
                    Environment, Health & Safety
                  </small>
                </div>
              </div>


              <div className="responsibility-item">
                <FaHardHat />
                <div>
                  <strong>Site Safety</strong>
                  <small>
                    Safety-focused engineering environment
                  </small>
                </div>
              </div>


              <div className="responsibility-item">
                <FaIndustry />
                <div>
                  <strong>Engineering</strong>
                  <small>
                    Real-world infrastructure exposure
                  </small>
                </div>
              </div>


              <div className="responsibility-item">
                <FaRoute />
                <div>
                  <strong>Infrastructure</strong>
                  <small>
                    Large-scale transport project
                  </small>
                </div>
              </div>

            </div>

          </div>


          {/* =================================================
              VISUAL SIDE
          ================================================= */}

          <div className="experience-visual">

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />


            <div className="rrts-image-card">

              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Delhi-Meerut%20RRTS%20line.jpg"
                alt="Delhi Meerut RRTS corridor"
              />

              <div className="rrts-image-overlay" />


              <div className="rrts-image-top">

                <span className="live-indicator">
                  LIVE PROJECT
                </span>

                <span>
                  RRTS
                </span>

              </div>


              <div className="rrts-image-bottom">

                <div className="train-icon">
                  <FaTrain />
                </div>

                <div>
                  <small>
                    PROJECT ENVIRONMENT
                  </small>

                  <strong>
                    DELHI — MEERUT CORRIDOR
                  </strong>
                </div>

              </div>

            </div>


            {/* =================================================
                FLOATING INFO CARDS
            ================================================= */}

            <div className="floating-info safety-card">

              <div className="floating-icon green">
                <FaShieldAlt />
              </div>

              <div>
                <small>DOMAIN</small>
                <strong>EHS</strong>
              </div>

            </div>


            <div className="floating-info infrastructure-card">

              <div className="floating-icon cyan">
                <FaTrain />
              </div>

              <div>
                <small>PROJECT TYPE</small>
                <strong>RAPID TRANSIT</strong>
              </div>

            </div>


            <div className="floating-info engineering-card">

              <div className="floating-icon purple">
                <FaHardHat />
              </div>

              <div>
                <small>ROLE</small>
                <strong>TRAINEE</strong>
              </div>

            </div>

          </div>

        </article>


        {/* =================================================
            CAREER FLOW
        ================================================= */}

        <div className="career-flow">

          <div className="flow-item active">
            <span>01</span>
            <strong>Diploma</strong>
            <small>Engineering</small>
          </div>


          <div className="flow-line">
            <div />
          </div>


          <div className="flow-item active">
            <span>02</span>
            <strong>RRTS</strong>
            <small>EHS Experience</small>
          </div>


          <div className="flow-line">
            <div />
          </div>


          <div className="flow-item future">
            <span>03</span>
            <strong>IT + AI</strong>
            <small>Next Chapter</small>
          </div>

        </div>


        {/* =================================================
            PROJECT LINK
        ================================================= */}

        <div className="experience-footer-card">

          <div className="footer-project-icon">
            <FaTrain />
          </div>

          <div className="footer-project-content">

            <small>
              PROJECT REFERENCE
            </small>

            <strong>
              Delhi–Meerut Regional Rapid Transit System
            </strong>

          </div>

          <a
            href="https://ncrtc.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit NCRTC
            <FaExternalLinkAlt />
          </a>

        </div>


        {/* =================================================
            END
        ================================================= */}

        <div className="experience-end">

          <div className="end-arrow">
            <FaArrowRight />
          </div>

          <span>
            EXPERIENCE COMPLETE
          </span>

          <small>
            THE JOURNEY CONTINUES →
          </small>

        </div>

      </section>


      <div className="image-credit">
        RRTS project image · Wikimedia Commons · CC BY-SA 4.0
      </div>

    </main>
  );
};

export default Experience;