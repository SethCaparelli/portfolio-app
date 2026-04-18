import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from '../components/App';
import { categories } from '../data/categories';
import type { CategoryKey } from '../types';

const menuLabels: Record<CategoryKey, string> = {
  app: 'Apps',
  cactus: 'Cactus',
  tree: 'Tree',
  sculpture: 'Sculpture',
  vessel: 'Vessel',
  painting: 'Painting',
  advertising: 'Advertising',
  design: 'Design',
};

describe('App', () => {
  it('renders the header and the default Apps category at /', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByRole('heading', { name: /seth caparelli/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Apps' })).toBeInTheDocument();
  });

  it.each(Object.keys(menuLabels).filter((k) => k !== 'app') as CategoryKey[])(
    'navigates to /%s when its menu icon is clicked',
    async (key) => {
      window.history.pushState({}, '', '/');
      const user = userEvent.setup();
      render(<App />);
      await user.click(screen.getByAltText(menuLabels[key]));
      expect(
        screen.getByRole('heading', { level: 3, name: categories[key].title }),
      ).toBeInTheDocument();
      expect(window.location.pathname).toBe(`/${key}`);
    },
  );

  it('renders one tile per work in the active category', async () => {
    window.history.pushState({}, '', '/');
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByAltText('Sculpture'));
    const tiles = screen.getAllByAltText('artwork');
    expect(tiles).toHaveLength(categories.sculpture.works.length);
  });

  it('redirects unknown categories back to /', () => {
    window.history.pushState({}, '', '/not-a-category');
    render(<App />);
    expect(screen.getByRole('heading', { level: 3, name: 'Apps' })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });
});
