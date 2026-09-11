import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import projectDetails from "../data/projectDetails";
import "./ProjectDetails.css";

const slugMap = {
  "mileage-fleet-management": "mileageFleet",
  fixitnow: "fixitnow",
  "margalla-travels": "margallaTravels",
  quizpop: "quizPop",
};
const Reveal = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.div>
);
const linkOK = (url) => {
  return url && url !== "#" && !url.includes("[");
};
const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const fadeSide = (direction = 1) => ({
  hidden: {
    opacity: 0,
    x: direction * 18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
});

const viewport = {
  once: true,
  amount: 0.2,
};

function SectionLabel({ number, children }) {
  return (
    <div className="pd-section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function ProjectDetails() {
  const { projectSlug } = useParams();

  const projectKey = slugMap[projectSlug];
  const project = projectDetails[projectKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project) {
    return (
      <main className="project-details pd-not-found">
        <div className="pd-container">
          <span className="pd-eyebrow">PROJECT NOT FOUND</span>

          <h1>That project doesn't exist.</h1>

          <p>
            The project you're looking for could not be found in the selected
            work collection.
          </p>

          <Link to="/#projects" className="pd-back-link">
            <ArrowLeft size={16} />
            Back to selected work
          </Link>
        </div>
      </main>
    );
  }

  const hasLearnings = project.learnings?.length > 0;

  return (
    <main className="project-details">
      {/* =====================================================
          HERO
      ===================================================== */}
    <section className="cs-hero">
  <div className="cs-hero-inner">

    {/* Left */}
    <Reveal className="cs-hero-content">
      <Link to="/#projects" className="cs-back">
        <ArrowLeft size={16} />
        All Projects
      </Link>

      <div className="cs-meta">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>

      <h1>{project.title}</h1>

      <p className="cs-subtitle">
        {project.subtitle}
      </p>

      <div className="cs-stack">
        {project.stack.split(" · ").map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="cs-actions">
        {linkOK(project.live) && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="cs-button cs-button-primary"
          >
            Live Project
            <ArrowUpRight size={16} />
          </a>
        )}

        {linkOK(project.github) && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="cs-button"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </Reveal>

    {/* Right — Project Image */}
    <Reveal className="cs-hero-image">
      <div className="cs-image-frame">
        <img
          src={project.image}
          alt={`${project.title} preview`}
        />
      </div>

      <span className="cs-image-label">
        PROJECT PREVIEW
      </span>
    </Reveal>

  </div>
</section>



      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section className="pd-section pd-overview">
        <div className="pd-container">
          <SectionLabel number="01">OVERVIEW</SectionLabel>

          <div className="pd-overview-grid">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(-1)}
            >
              {project.overviewTitle}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(1)}
            >
              {project.overview}
            </motion.p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM + SOLUTION
      ===================================================== */}
      <section className="pd-section pd-story">
        <div className="pd-container">
          <SectionLabel number="02">PROBLEM & SOLUTION</SectionLabel>

          <div className="pd-story-grid">
            <motion.article
              className="pd-story-block"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(-1)}
            >
              <span className="pd-small-label">THE PROBLEM</span>

              <h3>{project.problem.title}</h3>

              <p>{project.problem.content}</p>
            </motion.article>

            <motion.article
              className="pd-story-block pd-story-block-accent"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(1)}
            >
              <span className="pd-small-label">THE SOLUTION</span>

              <h3>{project.solution.title}</h3>

              <p>{project.solution.content}</p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT I LEARNED
      ===================================================== */}
      {hasLearnings && (
        <section className="pd-section pd-learnings">
          <div className="pd-container">
            <SectionLabel number="03">WHAT I LEARNED</SectionLabel>

            <div className="pd-learning-layout">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeSide(-1)}
              >
                <h2>
                  What this project
                  <span> taught me.</span>
                </h2>

                <p className="pd-learning-intro">
                  The most useful lessons I took from building and working on
                  this project.
                </p>
              </motion.div>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeSide(1)}
              >
                {project.learnings.slice(0, 5).map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          OUTCOME
      ===================================================== */}
      <section className="pd-section pd-outcome">
        <div className="pd-container">
          <SectionLabel number="04">OUTCOME</SectionLabel>

          <motion.div
            className="pd-outcome-content"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <h2>
              {project.outcomeTitle.main}{" "}
              <span>{project.outcomeTitle.accent}</span>
            </h2>

            <p>{project.outcome}</p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="pd-footer">
        <div className="pd-container">
          <div className="pd-footer-top">
            <div>
              <span className="pd-footer-number">{project.number}</span>

              <h3>{project.title}</h3>
            </div>

            <Link to="/#projects" className="pd-footer-back">
              <ArrowLeft size={16} />
              Back to Selected Work
            </Link>
          </div>

          <div className="pd-footer-links">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Project
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default ProjectDetails;