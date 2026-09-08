import { motion } from "framer-motion";
import "./About.css";

const journey = [
  {
    number: "01",
    title: "Curious",
    text: "Started exploring how websites and software are built.",
  },
  {
    number: "02",
    title: "Learning",
    text: "Developing my foundation in Software Engineering and web technologies.",
  },
  {
    number: "03",
    title: "Building",
    text: "Turning what I learn into real projects and practical applications.",
  },
  {
    number: "04",
    title: "Growing",
    text: "Continuously improving through projects, problem-solving, and new challenges.",
  },
];

const introContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const introItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const journeyContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const journeyItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const storyAnimation = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const tagAnimation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const listAnimation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* SECTION HEADER */}
        <motion.div
          className="about-intro"
          variants={introContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="section-label" variants={introItem}>
            01 — ABOUT ME
          </motion.span>

          <motion.h2 variants={introItem}>
            More than just <span>code.</span>
          </motion.h2>

          <motion.p variants={introItem}>
            I'm a Software Engineering student who enjoys turning ideas
            into functional digital products.
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="about-grid">

          {/* LEFT — JOURNEY */}
          <motion.div
            className="journey"
            variants={journeyContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.div
              className="journey-header"
              variants={journeyItem}
            >
              <span className="journey-line-small" />
              MY JOURNEY
            </motion.div>

            <div className="journey-list">

              {/* Animated vertical line */}
              <motion.span
                className="journey-animation-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />

              {journey.map((item, index) => (
                <motion.div
                  className={`journey-item ${
                    index === journey.length - 1
                      ? "journey-current"
                      : ""
                  }`}
                  variants={journeyItem}
                  key={item.number}
                >
                  <div className="journey-marker">

                    <motion.span
                      className="journey-dot"
                      initial={{
                        scale: 0.7,
                        backgroundColor: "#f1edff",
                      }}
                      whileInView={{
                        scale: 1,
                        backgroundColor: "#8b5cf6",
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.18,
                      }}
                    />

                    {index !== journey.length - 1 && (
                      <span className="journey-connector" />
                    )}

                  </div>

                  <div className="journey-content">
                    <span className="journey-number">
                      {item.number}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — STORY */}
          <motion.div
            className="about-story"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={storyAnimation}
          >

            <h3>
              I enjoy turning ideas into things
              people can actually <span>use.</span>
            </h3>

            <div className="about-text">
              <p>
                I enjoy building modern web applications and understanding
                how different parts of software work together. From designing
                interfaces to working with APIs and databases, I enjoy the
                process of bringing an idea to life.
              </p>

              <p>
                I believe the best way to learn is by building. That's why
                I enjoy working on projects that challenge me to explore new
                technologies, solve problems, and create real, usable products.
              </p>
            </div>

            {/* WHAT DRIVES ME */}
            <motion.div
              className="drives-me"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <span className="small-heading">
                WHAT DRIVES ME
              </span>

              <div className="trait-tags">
                <motion.span variants={tagAnimation}>
                  ✦ Curious
                </motion.span>

                <motion.span variants={tagAnimation}>
                  ✦ Problem Solver
                </motion.span>

                <motion.span variants={tagAnimation}>
                  ✦ Product Builder
                </motion.span>

                <motion.span variants={tagAnimation}>
                  ✦ Continuous Learner
                </motion.span>
              </div>
            </motion.div>

            {/* CURRENTLY */}
            <motion.div
              className="currently"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              <span className="small-heading">
                CURRENTLY
              </span>

              <motion.ul>
                <motion.li variants={listAnimation}>
                  Studying Software Engineering
                </motion.li>

                <motion.li variants={listAnimation}>
                  Building full-stack web projects
                </motion.li>

                <motion.li variants={listAnimation}>
                  Improving problem-solving skills
                </motion.li>
              </motion.ul>
            </motion.div>

          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="about-footer"
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span />

          <p>
            Currently learning, building, and turning ideas into reality.
          </p>

          <span />
        </motion.div>

      </div>
    </section>
  );
};

export default About;