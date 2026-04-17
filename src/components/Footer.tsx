export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <small>&copy; Seth Caparelli {year}</small>
      <div id="social-links">
        <a
          href="https://www.linkedin.com/in/seth-caparelli/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://soundcloud.com/bear_remington"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SoundCloud"
        >
          <i className="fab fa-soundcloud"></i>
        </a>
      </div>
    </footer>
  );
}
