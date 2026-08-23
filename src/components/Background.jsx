import { motion } from "framer-motion";
import background from "../assets/backgrounds/ai-background.png";

const codeItems = [
  "import numpy as np",
  "model.fit()",
  "docker build .",
  "mlflow ui",
  "pipeline.run()",
  "deploy(model)",
];

export default function Background() {
  return (
    <div className="website-background">

      {/* AI BACKGROUND IMAGE */}

      <img
        src={background}
        className="ai-background-image"
        alt=""
      />


      {/* DARK READABILITY OVERLAY */}

      <div className="background-dark-overlay" />


      {/* AURORA GLOWS */}

      <div className="background-glow glow-cyan" />

      <div className="background-glow glow-purple" />


      {/* FLOATING CODE */}

      {codeItems.map((code, index) => (
        <motion.div
          key={code}
          className={`background-code code-${index}`}
          animate={{
            y: [0, -12, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {code}
        </motion.div>
      ))}


      {/* PARTICLES */}

      <div className="background-particles">

        {Array.from({ length: 35 }).map((_, index) => (
          <motion.span
            key={index}
            className="background-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      </div>

    </div>
  );
}