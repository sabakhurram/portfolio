import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  FileText,
  Sparkles,
} from "lucide-react";
import "./Contact.css";

const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.56 20.452h3.557V8.999H3.56v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C24 .774 23.2.774 23.2 1.729v20.542C23.2 23.227 24 24 22.225 24Z" />
  </svg>
);

const smoothEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const transitionRef = useRef(null);

  /*
    Scroll progress for the transition.
    The transition changes continuously as the user scrolls.
  */
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"],
  });

  const coreScale = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0.35, 1, 1.8]
  );

  const coreOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.45, 0.8],
    [0, 1, 1]
  );

  const ringScale = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0.5, 1, 2.2]
  );

  const ringOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.45, 0.7],
    [0, 1, 0]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.2, 0.45, 0.7],
    [0, 1, 1]
  );

  const transitionTextOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.72],
    [0, 1, 0]
  );

  return (
    <section className="contact-section" id="contact">

      {/* =========================================
          BUILD → CONNECT TRANSITION
      ========================================== */}

      <div
        className="contact-transition"
        ref={transitionRef}
      >
        <motion.div
          className="transition-line transition-line-left"
          style={{ scaleX: lineScale }}
        />

        <motion.div
          className="transition-line transition-line-right"
          style={{ scaleX: lineScale }}
        />

        <motion.div
          className="transition-ring"
          style={{
            scale: ringScale,
            opacity: ringOpacity,
          }}
        />

        <motion.div
          className="transition-core"
          style={{
            scale: coreScale,
            opacity: coreOpacity,
          }}
        />

        <motion.div
          className="transition-text"
          style={{
            opacity: transitionTextOpacity,
          }}
        >
          <span>BUILD</span>
          <span className="transition-arrow">→</span>
          <span>CONNECT</span>
        </motion.div>
      </div>

      {/* =========================================
          CONTACT CONTENT
      ========================================== */}

      <div className="contact-container">

        <motion.div
          className="contact-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="contact-eyebrow"
            variants={fadeUp}
          >
            <span className="contact-index">04</span>
            <span className="contact-eyebrow-line" />
            <span>LET&apos;S CONNECT</span>
          </motion.div>

          <motion.h2 variants={fadeUp}>
            Let&apos;s build something
            <span> meaningful.</span>
          </motion.h2>

          <motion.p variants={fadeUp}>
            I&apos;m currently looking for internship opportunities and
            interesting projects where I can learn, contribute, and grow as a
            software engineer.
          </motion.p>
        </motion.div>

        {/* MAIN CTA */}

        <motion.div
          className="contact-cta-wrapper"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: smoothEase,
          }}
        >
          <a
            href="mailto:sabakhurram0001@gmail.com"
            className="contact-main-cta"
          >
            <span className="contact-cta-icon">
              <Mail size={20} />
            </span>

            <span>Get In Touch</span>

            <span className="contact-cta-arrow">
              <ArrowUpRight size={21} />
            </span>
          </a>
        </motion.div>

        {/* CONTACT LINKS */}

        <motion.div
          className="contact-links"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >

          <motion.a
            href="mailto:sabakhurram0001@gmail.com"
            className="contact-link"
            variants={fadeUp}
          >
            <span className="contact-link-icon">
              <Mail size={18} />
            </span>

            <span className="contact-link-content">
              <small>EMAIL</small>
              <strong>sabakhurram0001@gmai.com</strong>
            </span>

            <ArrowUpRight size={17} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/saba-khurram-0019753b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            variants={fadeUp}
          >
            <span className="contact-link-icon">
              <LinkedinIcon size={18} />
            </span>

            <span className="contact-link-content">
              <small>LINKEDIN</small>
              <strong>Connect with me</strong>
            </span>

            <ArrowUpRight size={17} />
          </motion.a>

          <motion.a
            href="https://github.com/sabakhurram"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            variants={fadeUp}
          >
            <span className="contact-link-icon">
              <GithubIcon size={18} />
            </span>

            <span className="contact-link-content">
              <small>GITHUB</small>
              <strong>View my code</strong>
            </span>

            <ArrowUpRight size={17} />
          </motion.a>

          {/* <motion.a
            href="/Saba-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            variants={fadeUp}
          >
            <span className="contact-link-icon">
              <FileText size={18} />
            </span>

            <span className="contact-link-content">
              <small>RESUME</small>
              <strong>View my resume</strong>
            </span>

            <ArrowUpRight size={17} />
          </motion.a> */}

        </motion.div>

        {/* FOOTER */}

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <div className="contact-bottom-line" />

          <div className="contact-footer">

            <div className="contact-brand">
              <span>SABA.</span>
              <small>Software Engineering Student</small>
            </div>

            <div className="contact-status">
              <span className="status-dot" />
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="contact-footer-note">
              <Sparkles size={14} />
              <span>Always learning. Always building.</span>
            </div>

          </div>

          <div className="contact-copyright">
            © {new Date().getFullYear()} Saba. Built with React.
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;