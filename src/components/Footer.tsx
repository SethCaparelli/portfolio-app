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
          href="https://github.com/SethCaparelli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://soundcloud.com/bear_remington"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SoundCloud"
        >
          <i className="fab fa-soundcloud"></i>
        </a>
        <a
          href="https://muvic.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Muvic"
          className="muvic-link"
        >
          <svg
            className="muvic-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            aria-hidden="true"
          >
            <path
              d="M10 40 Q28 12 28 40 Q28 68 10 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.38"
            />
            <path
              d="M10 40 Q38 8 38 40 Q38 72 10 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.65"
            />
            <path
              d="M10 40 Q48 4 48 40 Q48 76 10 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="16" cy="40" r="5" fill="currentColor" />
            <polygon points="54,28 72,40 54,52" fill="currentColor" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
