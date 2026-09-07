import { Atom, Cloud, Database } from "lucide-react";
import "./Hero.css";
import { useEffect, useState } from "react";
const GitHubIcon = () => (
  <svg
    className="github-svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.2 9.2 0 0 1 12 6.9c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.97-2.35 4.84-4.58 5.1.36.33.68.96.68 1.94 0 1.4-.01 2.53-.01 2.88 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const Hero = () => {
    const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const [roleIndex, setRoleIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRoleIndex((current) => (current + 1) % roles.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero">

      {/* Background */}
      <div className="hero-grid" />

      <div className="ambient-glow glow-top-right" />
      <div className="ambient-glow glow-bottom-left" />

      {/* Decorative particles */}
      <div className="hero-particles">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
        <span className="particle particle-7" />
        <span className="particle particle-8" />
      </div>

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            SOFTWARE ENGINEERING STUDENT
            <span className="eyebrow-line" />
          </div>

          <h1>
            Hi, I'm <span>Saba.</span>
          </h1>
          <div className="role-wrapper">
  <span className="role-prefix">I'm a</span>

  <span key={roleIndex} className="animated-role">
    {roles[roleIndex]}
  </span>
</div>

         <p>
  I build modern, functional web experiences and turn ideas
  into real, usable products.
</p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View My Work
              <span className="button-arrow">→</span>
            </a>

            <a href="#contact" className="button button-secondary">
              Let's Connect
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          {/* Orbit lines */}
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          {/* Strong glow behind code editor */}
          <div className="code-card-aura" />
          <div className="code-card-aura aura-secondary" />

          {/* Floating geometric decorations */}
          <div className="floating-shape shape-one" />
          <div className="floating-shape shape-two" />

          {/* React Card */}
          <div className="tech-card tech-react">
            <div className="tech-icon">
              <Atom size={30} strokeWidth={1.5} />
            </div>

            <div>
              <h3>React</h3>
              <p>UI Library</p>
            </div>
          </div>

          {/* API Card */}
          <div className="tech-card tech-api">
            <div className="tech-icon">
              <Cloud size={30} strokeWidth={1.5} />
            </div>

            <div>
              <h3>API</h3>
              <p>REST </p>
            </div>
          </div>

          {/* DATABASE */}
          <div className="tech-card tech-database">
            <div className="tech-icon">
              <Database size={30} strokeWidth={1.5} />
            </div>

            <div>
              <h3>Database</h3>
              <p>PostgreSQL · MySQL</p>
            </div>
          </div>

          {/* GITHUB */}
          <div className="tech-card tech-github">
            <div className="tech-icon github-icon">
              <GitHubIcon />
            </div>

            <div>
              <h3>GitHub</h3>
              <p>Version Control</p>
            </div>
          </div>

          {/* MAIN CODE CARD */}
          <div className="code-card">
            <div className="code-header">

              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="code-file">index.js</span>

              <span className="code-language">JS</span>
            </div>

            <div className="code-content">

              <div className="line-number">1</div>
              <div className="code-line">
                <span className="code-purple">const</span>{" "}
                <span className="code-variable">developer</span>{" "}
                <span className="code-muted">=</span>{" "}
                <span className="code-purple">{"{"}</span>
              </div>

              <div className="line-number">2</div>
              <div className="code-line code-indent">
                <span className="code-key">passion</span>
                <span className="code-muted">:</span>{" "}
                <span className="code-string">"building"</span>
                <span className="code-muted">,</span>
              </div>

              <div className="line-number">3</div>
              <div className="code-line code-indent">
                <span className="code-key">creativity</span>
                <span className="code-muted">:</span>{" "}
                <span className="code-boolean">true</span>
                <span className="code-muted">,</span>
              </div>

              <div className="line-number">4</div>
              <div className="code-line code-indent">
                <span className="code-key">learning</span>
                <span className="code-muted">:</span>{" "}
                <span className="code-string">"always"</span>
              </div>

              <div className="line-number">5</div>
              <div className="code-line">
                <span className="code-purple">{"}"}</span>
                <span className="code-muted">;</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;