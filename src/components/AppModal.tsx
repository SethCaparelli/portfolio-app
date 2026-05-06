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
      <h2 id="app-title">{work.name}</h2>
      <img id="app-gif" src={work.url} alt={`${work.name} demo`} loading="lazy" />
      <div id="tech-icon-container">
        {(work.technologies.length > 7
          ? [
              work.technologies.slice(0, Math.ceil(work.technologies.length / 2)),
              work.technologies.slice(Math.ceil(work.technologies.length / 2)),
            ]
          : [work.technologies]
        ).map((row, rowIdx) => (
          <div className="tech-icon-row" key={rowIdx}>
            {row.map((tech) => (
              <img className="tech-icon" key={tech} src={tech} alt="technology" loading="lazy" />
            ))}
          </div>
        ))}
      </div>
      <p id="app-description">{work.description}</p>
      <div id="app-button-container">
        <button
          className="app-button"
          onClick={() => window.open(work.url, '_blank', 'noopener,noreferrer')}
        >
          <svg
            className="app-button-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M8 5v14l11-7z"
              fill="currentColor"
            />
          </svg>
          View Video
        </button>
        {work.site ? (
          <button
            className="app-button"
            onClick={() => window.open(work.site, '_blank', 'noopener,noreferrer')}
          >
            <svg
              className="app-button-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit
          </button>
        ) : null}
      </div>
    </Modal>
  );
}
