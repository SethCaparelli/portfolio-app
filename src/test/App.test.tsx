import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from '../components/App';
import { categories } from '../data/categories';
import type { CategoryKey } from '../types';

// Menu icon alt text (set in Menu.tsx, distinct from category.title which can
// contain regex metachars like "Cactus^3").
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
  it('renders the header and the default Apps category', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /seth caparelli/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Apps' })).toBeInTheDocument();
  });

  it.each(Object.keys(menuLabels).filter((k) => k !== 'app') as CategoryKey[])(
    'switches to %s when its menu icon is clicked',
    async (key) => {
      const user = userEvent.setup();
      render(<App />);
      const icon = screen.getByAltText(menuLabels[key]);
      await user.click(icon);
      expect(
        screen.getByRole('heading', { level: 3, name: categories[key].title }),
      ).toBeInTheDocument();
    },
  );

  it('renders one tile per work in the active category', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByAltText('Sculpture'));
    const tiles = screen.getAllByAltText('artwork');
    expect(tiles).toHaveLength(categories.sculpture.works.length);
  });
});
