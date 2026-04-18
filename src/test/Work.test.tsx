import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Work from '../components/Work';
import type { AppWork, ImageWork } from '../types';

const appWork: AppWork = {
  kind: 'app',
  name: 'Test App',
  description: 'A test app',
  technologies: ['/assets/technologies/react-icon-2.png'],
  url: '/assets/gifs/test.gif',
  code: 'https://example.com/code',
  site: 'https://example.com',
};

const imageWork: ImageWork = {
  kind: 'image',
  url: '/assets/cactus/cactus^3_ver_1.jpg',
};

describe('Work', () => {
  it('renders the app title and tile image for app works', () => {
    render(<Work work={appWork} index={0} collection={[appWork]} />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
    const img = screen.getByAltText('Test App') as HTMLImageElement;
    expect(img.src).toContain('/assets/gifs/test.gif');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('opens the AppModal when an app tile is clicked', async () => {
    const user = userEvent.setup();
    render(<Work work={appWork} index={0} collection={[appWork]} />);
    await user.click(screen.getByAltText('Test App'));
    expect(await screen.findByText(/A test app/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /see code/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /visit site/i })).toBeInTheDocument();
  });

  it('renders an artwork image with lazy loading for image works', () => {
    render(<Work work={imageWork} index={0} collection={[imageWork]} />);
    const img = screen.getByAltText('artwork') as HTMLImageElement;
    expect(img.src).toContain('/assets/cactus/');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });
});
