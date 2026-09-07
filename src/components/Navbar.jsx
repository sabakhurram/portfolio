const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">SABA.</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="menu-button" aria-label="Open menu">
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;