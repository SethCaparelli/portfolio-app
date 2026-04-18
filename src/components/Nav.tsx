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
        <img id="profile-picture" src="/assets/icons/profile.webp" alt="Profile" />
        <p id="about-description">
          Senior Software Engineer with 8 years shipping enterprise retail products end-to-end, from
          customer-facing loyalty and store-finder UIs to event-driven microservices on Kafka and AWS
          in PCI DSS environments. Full-stack across React, Node.js, Java, and Python; de facto tech
          lead known for clear design docs, cross-team collaboration, and mentoring through code
          review. Artist at core, which is where the design instinct and product empathy come from.
        </p>
      </Modal>
      <Modal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        classNames={{ overlay: 'resume-overlay', modal: 'resume-modal' }}
        center
      >
        <img id="resume" src="/assets/seth-caparelli-resume.webp" alt="Resume" />
        <a
          href="/assets/seth-caparelli-resume.pdf"
          download="seth-caparelli-resume.pdf"
          aria-label="Download resume"
        >
          <i className="fas fa-download"></i>
        </a>
      </Modal>
    </div>
  );
}
