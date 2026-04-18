import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('renders Contact, About, and Resume entries', () => {
    render(<Nav />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/resume/i)).toBeInTheDocument();
  });

  it('Contact links to mailto', () => {
    render(<Nav />);
    const link = screen.getByRole('link', { name: /contact/i });
    expect(link).toHaveAttribute('href', 'mailto:sethcaparelli@gmail.com');
  });

  it('opens the About modal with the bio when clicked', async () => {
    const user = userEvent.setup();
    render(<Nav />);
    await user.click(screen.getByText(/about/i));
    expect(await screen.findByText(/senior software engineer with 8 years/i)).toBeInTheDocument();
  });

  it('opens the Resume modal with download link when clicked', async () => {
    const user = userEvent.setup();
    render(<Nav />);
    await user.click(screen.getByText(/resume/i));
    expect(await screen.findByAltText(/resume/i)).toBeInTheDocument();
    const download = screen.getByLabelText(/download resume/i);
    expect(download).toHaveAttribute('href', '/assets/seth-caparelli-resume.pdf');
    expect(download).toHaveAttribute('download');
  });
});
