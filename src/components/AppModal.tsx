import { Modal } from 'react-responsive-modal';
import type { AppWork } from '../types';

interface Props {
  work: AppWork;
  open: boolean;
  onClose: () => void;
}

export default function AppModal({ work, open, onClose }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      classNames={{ overlay: 'app-overlay', modal: 'app-modal' }}
      center
    >
      <img id="app-gif" src={work.url} alt={`${work.name} demo`} loading="lazy" />
      <div id="tech-icon-container">
        {work.technologies.map((tech) => (
          <img className="tech-icon" key={tech} src={tech} alt="technology" loading="lazy" />
        ))}
      </div>
      <p id="app-description">{work.description}</p>
      <div id="app-button-container">
        <button
          id="code-button"
          className="app-button"
          onClick={() => window.open(work.code, '_blank', 'noopener,noreferrer')}
        >
          See Code
        </button>
        {work.site ? (
          <button
            id="site-button"
            className="app-button"
            onClick={() => window.open(work.site, '_blank', 'noopener,noreferrer')}
          >
            Visit Site
          </button>
        ) : null}
      </div>
    </Modal>
  );
}
