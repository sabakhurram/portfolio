import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    icon: <FaCode />,
    description:
      "Building responsive and accessible user interfaces that work beautifully across devices.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Router",
      "Context API",
      "Responsive Design",
    ],
  },
  {
    number: "02",
    title: "Backend",
    icon: <FaServer />,
    description:
      "Building the logic, APIs and systems that power modern web applications.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    title: "Database",
    icon: <FaDatabase />,
    description:
      "Working with databases and backend services to manage and organize application data.",
    skills: ["PostgreSQL", "SQL", "Supabase", "Firebase"],
  },
  {
    number: "04",
    title: "Tools & More",
    icon: <FaCloud />,
    description:
      "Using modern tools to build, manage, collaborate and deploy real applications.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
      "cPanel",
      "Vercel",
      "Railway",
    ],
  },
];

const orbitConfigs = [
  {
    className: "planet-react",
    rx: 115,
    ry: 115,
    rotation: 0,
    speed: 0.45,
    phase: 0,
  },
  {
    className: "planet-javascript",
    rx: 140,
    ry: 90,
    rotation: 28,
    speed: 0.34,
    phase: 1.7,
  },
  {
    className: "planet-node",
    rx: 165,
    ry: 105,
    rotation: -25,
    speed: 0.29,
    phase: 3.1,
  },
  {
    className: "planet-postgresql",
    rx: 190,
    ry: 125,
    rotation: 12,
    speed: 0.24,
    phase: 4.6,
  },
  {
    className: "planet-supabase",
    rx: 215,
    ry: 145,
    rotation: -16,
    speed: 0.19,
    phase: 2.5,
  },
  {
    className: "planet-github",
    rx: 235,
    ry: 165,
    rotation: 8,
    speed: 0.15,
    phase: 5.3,
  },
];

const Planet = ({
  icon,
  name,
  className,
  planetRef,
}) => {
  return (
    <div
      ref={planetRef}
      className={`planet ${className}`}
    >
      <div className="planet-content">
        <div className="planet-icon">
          {icon}
        </div>

        <span>{name}</span>
      </div>
    </div>
  );
};

const SkillGroup = ({ group, index }) => {
  return (
    <motion.div
      className="skill-group"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -35 : 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="skill-number">
        {group.number}
      </div>

      <div className="skill-content">
        <div className="skill-group-title">
          <div className="skill-group-icon">
            {group.icon}
          </div>

          <h3>{group.title}</h3>
        </div>

        <p>{group.description}</p>

        <div className="skill-tags">
          {group.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const planetRefs = useRef([]);

  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed =
        (currentTime - startTime) / 1000;

      const universe =
        document.querySelector(".universe");

      const scale =
        universe?.getBoundingClientRect().width /
          500 || 1;

      orbitConfigs.forEach((config, index) => {
        const planet =
          planetRefs.current[index];

        if (!planet) return;

        const angle =
          elapsed * config.speed +
          config.phase;

        const x =
          config.rx *
          scale *
          Math.cos(angle);

        const y =
          config.ry *
          scale *
          Math.sin(angle);

        const rotation =
          (config.rotation * Math.PI) / 180;

        const rotatedX =
          x * Math.cos(rotation) -
          y * Math.sin(rotation);

        const rotatedY =
          x * Math.sin(rotation) +
          y * Math.cos(rotation);

        planet.style.transform = `
          translate(-50%, -50%)
          translate3d(
            ${rotatedX}px,
            ${rotatedY}px,
            0
          )
        `;
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* INTRO */}

        <motion.div
          className="skills-intro"
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-label">
            02 — SKILLS
          </span>

          <h2>
            What I <span>build</span> with.
          </h2>

          <p>
            A growing toolkit for turning ideas into
            functional, thoughtful digital experiences.
          </p>
        </motion.div>


        {/* SHOWCASE */}

        <div className="skills-showcase">

          {/* LEFT */}

          <div className="skills-column skills-left">
            <SkillGroup
              group={skillGroups[0]}
              index={0}
            />

            <SkillGroup
              group={skillGroups[2]}
              index={1}
            />
          </div>


          {/* UNIVERSE */}

          <motion.div
            className="skill-universe"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span className="space-star star-one">
              ✦
            </span>

            <span className="space-star star-two">
              ✦
            </span>

            <span className="space-star star-three">
              ✦
            </span>

            <span className="space-star star-four">
              ✦
            </span>

            <div className="universe">

              <div className="center-glow" />

              {/* STATIC ORBITS */}

              <div className="orbit-line orbit-line-1" />
              <div className="orbit-line orbit-line-2" />
              <div className="orbit-line orbit-line-3" />
              <div className="orbit-line orbit-line-4" />
              <div className="orbit-line orbit-line-5" />
              <div className="orbit-line orbit-line-6" />


              {/* PLANETS */}

              <Planet
                planetRef={(el) =>
                  (planetRefs.current[0] = el)
                }
                className="planet-react"
                icon={<FaReact />}
                name="React"
              />

              <Planet
                planetRef={(el) =>
                  (planetRefs.current[1] = el)
                }
                className="planet-javascript"
                icon={<SiJavascript />}
                name="JavaScript"
              />

              <Planet
                planetRef={(el) =>
                  (planetRefs.current[2] = el)
                }
                className="planet-node"
                icon={<FaNodeJs />}
                name="Node.js"
              />

              <Planet
                planetRef={(el) =>
                  (planetRefs.current[3] = el)
                }
                className="planet-postgresql"
                icon={<SiPostgresql />}
                name="PostgreSQL"
              />

              <Planet
                planetRef={(el) =>
                  (planetRefs.current[4] = el)
                }
                className="planet-supabase"
                icon={<SiSupabase />}
                name="Supabase"
              />

              <Planet
                planetRef={(el) =>
                  (planetRefs.current[5] = el)
                }
                className="planet-github"
                icon={<FaGithub />}
                name="GitHub"
              />


              {/* CENTER */}

              <div className="universe-center">

                <span className="center-name">
                  SABA.
                </span>

                <span className="center-role">
                  FULL-STACK
                </span>

                <span className="center-role">
                  DEVELOPER
                </span>

              </div>

            </div>

          </motion.div>


          {/* RIGHT */}

          <div className="skills-column skills-right">

            <SkillGroup
              group={skillGroups[1]}
              index={2}
            />

            <SkillGroup
              group={skillGroups[3]}
              index={3}
            />

          </div>

        </div>


        {/* BOTTOM */}

        <motion.div
          className="skills-bottom"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >

          <span className="bottom-line" />

          <div className="learning-note">
            <span className="learning-star">
              ✦
            </span>

            <p>
              Learning by building.
            </p>
          </div>

          <span className="bottom-line" />

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;