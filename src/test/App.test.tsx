import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from '../components/App';

describe('App', () => {
  it('renders the header and default Apps category', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /seth caparelli/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /apps/i })).toBeInTheDocument();
  });

  it('switches category when a menu icon is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const sculpture = screen.getByAltText(/sculpture/i);
    await user.click(sculpture);
    expect(screen.getByRole('heading', { level: 3, name: /sculpture/i })).toBeInTheDocument();
  });
});
