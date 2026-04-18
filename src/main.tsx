import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-responsive-modal/styles.css';
import 'yet-another-react-lightbox/styles.css';
import './index.css';
import App from './components/App';

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
