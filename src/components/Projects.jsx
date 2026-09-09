import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "FEATURED PROJECT",
    title: "Mileage & Fleet Management",
      slug: "mileage-fleet-management",
    description:
      "A full-stack fleet management platform developed to manage vehicles, drivers, mileage, categories, authentication, audit logs, and operational reporting.",
    role: "Full Stack Developer",
    focus: "Authentication · Fleet Management · APIs · Database",
    outcome: "Production-ready management system",
    technologies: "React · Node.js · PostgreSQL · Supabase",
    image: "/projects/mileage-management.png",
    live: "#",
    github: "#",
  },

  {
    number: "02",
    category: "COLLABORATIVE PROJECT",
    title: "FixItNow",
    slug: "fixitnow",
    description:
      "A modern service platform connecting customers with repair and maintenance services through a complete digital booking, ordering, and management experience.",
    role: "Full Stack Developer · Team Project",
    focus: "Services · Orders · Authentication · E-commerce",
    outcome: "Functional service platform",
    technologies: "React · Node.js · Firebase · PostgreSQL",
    image: "/projects/fixitnow.png",
    live: "#",
    github: "#",
  },

  {
    number: "03",
    category: "CORPORATE WEBSITE",
    title: "Margalla Travels",
    slug: "margalla-travels",
    description:
      "A premium responsive corporate website built for a real car rental company, combining modern visual design, interactive sections, and smooth motion to create a polished digital experience.",
    role: "Frontend Developer",
    focus: "UI · Animations · Responsive Design · UX",
    outcome: "Production website with 7+ sections and 20+ GSAP animations",
    technologies: "HTML · CSS · JavaScript · GSAP · EmailJS",
    image: "/projects/coperate-website.png",
    live: "#",
    github: "#",
  },

  {
    number: "04",
    category: "INTERACTIVE WEB APPLICATION",
    title: "QuizPop",
    slug: "quizpop",
    description:
      "A responsive quiz application featuring six categories, timed multiple-choice questions, score tracking, answer validation, and an animated SVG mascot with different emotional states.",
    role: "Frontend Developer",
    focus: "JavaScript · Quiz Logic · Animation · Responsive UI",
    outcome: "Interactive responsive quiz experience",
    technologies: "HTML · CSS · JavaScript · SVG",
    image: "/projects/quiz-pop.png",
    live: "#",
    github: "#",
  },
];

/* =========================
   SMOOTH ANIMATION SYSTEM
========================= */

const smoothEase = [0.22, 1, 0.36, 1];

/*
  Very small movement.
  The goal is NOT to look like the elements are sliding in.
  They should feel like they are gently settling into position.
*/

const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.95,
      delay,
      ease: smoothEase,
    },
  },
});

const fadeSide = (direction, delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction * 12,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.95,
      delay,
      ease: smoothEase,
    },
  },
});

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.975,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.1,
      delay: 0.02,
      ease: smoothEase,
    },
  },
};

const indexReveal = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

function Projects() {
  const [activeProject, setActiveProject] = useState("01");
  const [showProjectIndex, setShowProjectIndex] = useState(false);

  const projectRefs = useRef([]);
  const projectsSectionRef = useRef(null);

  /* =========================
     ACTIVE PROJECT OBSERVER
  ========================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveProject(entry.target.dataset.project);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================
     PROJECT INDEX VISIBILITY
  ========================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProjectIndex(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="projects"
      id="projects"
      ref={projectsSectionRef}
    >
      <div className="projects-container">

        {/* =========================
            SECTION INTRO
        ========================= */}

        <div className="projects-intro">

          <div className="projects-intro-left">

            <motion.span
              className="section-label"
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              03 — SELECTED WORK
            </motion.span>

            <motion.h2
              variants={fadeUp(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              Things I've <span>built.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.18)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              A collection of projects where ideas, problems, and
              curiosity became working products.
            </motion.p>

          </div>

          <motion.div
            className="projects-counter"
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
          >
            <strong>04</strong>
            <span>SELECTED PROJECTS</span>
          </motion.div>

        </div>

        {/* =========================
            PROJECT INDEX
        ========================= */}

        {showProjectIndex && (
          <motion.div
            className="project-index"
            variants={indexReveal}
            initial="hidden"
            animate="visible"
          >
            <div className="project-index-line" />

            {projects.map((project) => (
              <a
                href={`#project-${project.number}`}
                key={project.number}
                className={
                  activeProject === project.number
                    ? "index-number active"
                    : "index-number"
                }
              >
                {project.number}
              </a>
            ))}
          </motion.div>
        )}

        {/* =========================
            PROJECTS
        ========================= */}

        <div className="projects-list">

          {projects.map((project, index) => {

            /*
              Odd projects:
              content is on the RIGHT → comes gently from right

              Even projects:
              content is on the LEFT → comes gently from left
            */

            const direction = index % 2 === 0 ? 1 : -1;

            return (
              <article
                className={`project project-${index + 1}`}
                id={`project-${project.number}`}
                key={project.number}
                data-project={project.number}
                ref={(element) => {
                  projectRefs.current[index] = element;
                }}
              >

                {/* =========================
                    PROJECT VISUAL
                ========================= */}

                <div className="project-visual">

                  <div className="project-glow" />

                  <motion.div
                    className="project-image-wrapper"
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                    />

                    <Link
  to={`/projects/${project.slug}`}
  className="project-view"
>
  VIEW PROJECT <span>↗</span>
</Link>
                  </motion.div>

                </div>

                {/* =========================
                    PROJECT CONTENT
                ========================= */}

                <div className="project-content">

                  {/* NUMBER + CATEGORY */}

                  <div className="project-heading">

                    <motion.span
                      className="project-number"
                      variants={fadeSide(direction, 0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                    >
                      {project.number}
                    </motion.span>

                    <motion.span
                      className="project-category"
                      variants={fadeSide(direction, 0.08)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                    >
                      {project.category}
                    </motion.span>

                  </div>

                  {/* TITLE */}

                  <motion.h3
                    variants={fadeSide(direction, 0.14)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* DESCRIPTION */}

                  <motion.p
                    className="project-description"
                    variants={fadeSide(direction, 0.22)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* META */}

                  <motion.div
                    className="project-meta"
                    variants={fadeSide(direction, 0.40)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                  >

                    <div className="meta-item">
                      <span>ROLE</span>
                      <p>{project.role}</p>
                    </div>

                    <div className="meta-item">
                      <span>FOCUS</span>
                      <p>{project.focus}</p>
                    </div>

                    <div className="meta-item">
                      <span>OUTCOME</span>
                      <p>{project.outcome}</p>
                    </div>

                    <div className="meta-item">
                      <span>TECHNOLOGY</span>
                      <p>{project.technologies}</p>
                    </div>

                  </motion.div>

                  {/* LINKS */}

                  <motion.div
                    className="project-links"
                    variants={fadeSide(direction, 0.50)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                  >
                    <a href={project.live}>
                      Live Demo <span>↗</span>
                    </a>

                    <a href={project.github}>
                      GitHub <span>↗</span>
                    </a>
                  </motion.div>

                </div>
              </article>
            );
          })}

        </div>

        {/* =========================
            CLOSING
        ========================= */}

        <motion.div
          className="projects-closing"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <div className="closing-line" />

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            Always building something <span>new.</span>
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;