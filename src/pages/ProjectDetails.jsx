import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  ShieldCheck,
  Code2,
  Server,
} from "lucide-react";

import projectDetails from "../data/projectDetails";
import "./ProjectDetails.css";

const slugMap = {
  "mileage-fleet-management": "mileageFleet",
  fixitnow: "fixitnow",
  "margalla-travels": "margallaTravels",
  quizpop: "quizPop",
};

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const fadeSide = (direction = 1) => ({
  hidden: {
    opacity: 0,
    x: direction * 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
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
      duration: 1,
      ease,
    },
  },
};

const viewport = {
  once: true,
  amount: 0.18,
};

function SectionLabel({ number, children }) {
  return (
    <div className="pd-section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function ArchitectureItem({ icon, label, value }) {
  return (
    <div className="pd-architecture-item">
      <div className="pd-architecture-icon">{icon}</div>

      <div className="pd-architecture-label">{label}</div>

      <div className="pd-architecture-value">{value}</div>
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

  const hasArchitecture = project.architecture;
  const hasFeatures = project.features?.length > 0;
  const hasEngineering = project.engineering?.points?.length > 0;
  const hasContributions = project.contributions?.length > 0;
  const hasLearnings = project.learnings?.length > 0;
  const hasFutureImprovements = project.futureImprovements?.length > 0;

  return (
    <main className="project-details">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="pd-hero">
        <div className="pd-container">
          <Link to="/#projects" className="pd-back-link">
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>

          <div className="pd-hero-content">
            <motion.div
              className="pd-project-meta"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span>{project.number}</span>
              <span>{project.category}</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.08 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="pd-hero-subtitle"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.16 }}
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              className="pd-stack"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.24 }}
            >
              {project.stack}
            </motion.div>

            <motion.div
              className="pd-hero-actions"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.32 }}
            >
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="pd-button pd-button-primary"
                >
                  Visit Live Project
                  <ArrowUpRight size={16} />
                </a>
              )}

              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pd-button pd-button-secondary"
                >
                  View GitHub
                  <ArrowUpRight size={16} />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT IMAGE
      ===================================================== */}
      <section className="pd-image-section">
        <div className="pd-container">
          <motion.div
            className="pd-project-image-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={imageReveal}
          >
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="pd-project-image"
            />
          </motion.div>

          <div className="pd-image-caption">
            <span>PROJECT PREVIEW</span>
            <span>{project.title}</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section className="pd-section pd-overview">
        <div className="pd-container">
          <SectionLabel number="01">OVERVIEW</SectionLabel>

          <div className="pd-overview-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(-1)}
            >
              <h2>{project.overviewTitle}</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(1)}
            >
              <p>{project.overview}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGE / SOLUTION
      ===================================================== */}
      <section className="pd-section pd-challenge">
        <div className="pd-container">
          <SectionLabel number="02">CHALLENGE & SOLUTION</SectionLabel>

          <div className="pd-story-grid">
            <motion.article
              className="pd-story-block"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeSide(-1)}
            >
              <span className="pd-small-label">THE CHALLENGE</span>

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
          ARCHITECTURE
      ===================================================== */}
      {hasArchitecture && (
        <section className="pd-section pd-architecture">
          <div className="pd-container">
            <SectionLabel number="03">TECHNICAL ARCHITECTURE</SectionLabel>

            <motion.div
              className="pd-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
            >
              <h2>How the product is structured.</h2>

              <p>
                The technologies below form the core of the application and
                define how the different parts of the system work together.
              </p>
            </motion.div>

            <div className="pd-architecture-grid">
              <ArchitectureItem
                icon={<Code2 size={20} />}
                label="FRONTEND"
                value={project.architecture.frontend}
              />

              <ArchitectureItem
                icon={<Server size={20} />}
                label="BACKEND"
                value={project.architecture.backend}
              />

              <ArchitectureItem
                icon={<ShieldCheck size={20} />}
                label="AUTHENTICATION"
                value={project.architecture.authentication}
              />

              <ArchitectureItem
                icon={<Database size={20} />}
                label="DATABASE"
                value={project.architecture.database}
              />
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FEATURES
      ===================================================== */}
      {hasFeatures && (
        <section className="pd-section pd-features">
          <div className="pd-container">
            <SectionLabel number="04">KEY FEATURES</SectionLabel>

            <motion.div
              className="pd-section-heading pd-feature-heading"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
            >
              <h2>
                Built around <span>real functionality.</span>
              </h2>

              <p>
                The most important parts of the product, from the user's
                perspective and from an engineering standpoint.
              </p>
            </motion.div>

            <div className="pd-features-grid">
              {project.features.map((feature, index) => (
                <motion.article
                  className="pd-feature-card"
                  key={feature.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={{
                    delay: Math.min(index * 0.05, 0.25),
                  }}
                >
                  <div className="pd-feature-top">
                    <span>{feature.number}</span>

                    <div className="pd-check">
                      <Check size={15} />
                    </div>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          ENGINEERING
      ===================================================== */}
      {hasEngineering && (
        <section className="pd-section pd-engineering">
          <div className="pd-container">
            <SectionLabel number="05">ENGINEERING</SectionLabel>

            <div className="pd-engineering-heading">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeSide(-1)}
              >
                {project.engineering.title}
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeSide(1)}
              >
                A closer look at the technical decisions and implementation
                work behind the finished product.
              </motion.p>
            </div>

            <div className="pd-engineering-grid">
              {project.engineering.points.map((item, index) => (
                <motion.article
                  className="pd-engineering-item"
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={{
                    delay: Math.min(index * 0.06, 0.25),
                  }}
                >
                  <span className="pd-engineering-dot" />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          OPTIONAL DATABASE + SECURITY
      ===================================================== */}
      {(project.database?.length > 0 || project.security?.length > 0) && (
        <section className="pd-section pd-technical">
          <div className="pd-container">
            <SectionLabel number="06">TECHNICAL DETAILS</SectionLabel>

            <div className="pd-technical-grid">
              {project.database?.length > 0 && (
                <div className="pd-technical-block">
                  <div className="pd-technical-icon">
                    <Database size={19} />
                  </div>

                  <span className="pd-small-label">DATABASE</span>

                  <h3>Data structured around the product.</h3>

                  <ul>
                    {project.database.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.security?.length > 0 && (
                <div className="pd-technical-block">
                  <div className="pd-technical-icon">
                    <ShieldCheck size={19} />
                  </div>

                  <span className="pd-small-label">SECURITY</span>

                  <h3>Access and data protection.</h3>

                  <ul>
                    {project.security.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          MY ROLE
      ===================================================== */}
      {hasContributions && (
        <section className="pd-section pd-role">
          <div className="pd-container">
            <SectionLabel number="07">MY ROLE</SectionLabel>

            <div className="pd-role-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeSide(-1)}
              >
                <span className="pd-role-label">{project.role}</span>

                <h2>
                  {project.roleTitle.main}
                  <span>{project.roleTitle.accent}</span>
                </h2>

                <p>{project.roleDescription}</p>
              </motion.div>

              <motion.div
                className="pd-contributions"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeSide(1)}
              >
                <span className="pd-small-label">WHAT I CONTRIBUTED</span>

                <ul>
                  {project.contributions.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          OUTCOME
      ===================================================== */}
      <section className="pd-section pd-outcome">
        <div className="pd-container">
          <SectionLabel number="08">OUTCOME</SectionLabel>

          <motion.div
            className="pd-outcome-content"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <h2>
              {project.outcomeTitle.main}
              <span>{project.outcomeTitle.accent}</span>
            </h2>

            <p>{project.outcome}</p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LEARNINGS
      ===================================================== */}
      {(hasLearnings || hasFutureImprovements) && (
        <section className="pd-section pd-reflection">
          <div className="pd-container">
            <div className="pd-reflection-grid">
              {hasLearnings && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeSide(-1)}
                >
                  <span className="pd-small-label">WHAT I LEARNED</span>

                  <h3>What this project taught me.</h3>

                  <ul>
                    {project.learnings.map((item) => (
                      <li key={item}>
                        <Check size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {hasFutureImprovements && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeSide(1)}
                >
                  <span className="pd-small-label">
                    FUTURE IMPROVEMENTS
                  </span>

                  <h3>Where I would take it next.</h3>

                  <ul>
                    {project.futureImprovements.map((item) => (
                      <li key={item}>
                        <span className="pd-list-number">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

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