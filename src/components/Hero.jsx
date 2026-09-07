const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            SOFTWARE ENGINEER
          </div>

          <h1>
            Hi, I'm <span>Saba.</span>
          </h1>

          <p>
            I build modern, functional web experiences that turn ideas
            into real products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="button button-secondary">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="code-file">developer.js</span>
            </div>

            <div className="code-body">
              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-white">developer</span>{" "}
                <span className="code-muted">=</span>{" "}
                <span className="code-purple">{"{"}</span>
              </div>

              <div className="code-indent">
                <span className="code-key">passion</span>
                <span className="code-muted">:</span>{" "}
                <span className="code-lavender">"building"</span>
                <span className="code-muted">,</span>
              </div>

              <div className="code-indent">
                <span className="code-key">creativity</span>
                <span className="code-muted">:</span>{" "}
                <span className="code-white">true</span>
                <span className="code-muted">,</span>
              </div>

              <div className="code-indent">
                <span className="code-key">learning</span>
                <span className="code-muted">:</span>{" "}
                <span className="code-lavender">"always"</span>
              </div>

              <div>
                <span className="code-purple">{"}"}</span>
              </div>
            </div>
          </div>

          <div className="floating-card card-react">
            <span>⚛</span>
            React
          </div>

          <div className="floating-card card-api">
            <span>⌘</span>
            API
          </div>

          <div className="floating-card card-db">
            <span>◇</span>
            Database
          </div>

          <div className="orbit-dot orbit-one" />
          <div className="orbit-dot orbit-two" />
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;