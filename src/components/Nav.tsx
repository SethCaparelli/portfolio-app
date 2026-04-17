import { useState } from 'react';
import { Modal } from 'react-responsive-modal';

export default function Nav() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div id="nav">
      <a href="mailto:sethcaparelli@gmail.com">
        <h5 className="nav-target">Contact</h5>
      </a>
      <h5 onClick={() => setAboutOpen(true)} className="nav-target">
        About
      </h5>
      <h5 onClick={() => setResumeOpen(true)} className="nav-target">
        Resume
      </h5>
      <Modal
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
        classNames={{ overlay: 'about-overlay', modal: 'about-modal' }}
        center
      >
        <img id="profile-picture" src="/assets/icons/profile.png" alt="Profile" />
        <p id="about-description">
          I am an artist turned web developer. I have always loved building with my hands; but as a
          programmer, my mind is my tool of choice. The passion I have as an artist has transformed
          into creative problem solving in the form of code. Bridging the gap between art and code is
          something I continually think about and to actually make an impact on the world with my
          work is what drives me. I embrace the challenges of this industry and its constant
          evolution that I am excited to be apart of.
        </p>
      </Modal>
      <Modal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        classNames={{ overlay: 'resume-overlay', modal: 'resume-modal' }}
        center
      >
        <img id="resume" src="/assets/seth_capareli_resume.png" alt="Resume" />
        <a
          href="https://drive.google.com/file/d/1rZ_xxq5kBboSFmpk2UEtfGwEuFhFw7fi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume"
        >
          <i className="fas fa-download"></i>
        </a>
      </Modal>
    </div>
  );
}
