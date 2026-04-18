import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Menu from '../components/Menu';

function LocationProbe() {
  const loc = useLocation();
  return <div data-testid="location">{loc.pathname}</div>;
}

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path=":category" element={<Menu />} />
      </Routes>
      <LocationProbe />
    </MemoryRouter>,
  );
}

describe('Menu', () => {
  it('renders all 8 category icons', () => {
    renderAt('/');
    for (const label of [
      'Apps',
      'Cactus',
      'Tree',
      'Sculpture',
      'Vessel',
      'Painting',
      'Advertising',
      'Design',
    ]) {
      expect(screen.getByAltText(label)).toBeInTheDocument();
    }
  });

  it('shows the color icon for the active route', () => {
    renderAt('/cactus');
    const cactus = screen.getByAltText('Cactus') as HTMLImageElement;
    expect(cactus.src).toMatch(/cactus-icon-color\.webp$/);

    const tree = screen.getByAltText('Tree') as HTMLImageElement;
    expect(tree.src).toMatch(/tree-icon\.webp$/);
  });

  it('swaps to the color icon on hover and back on leave', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const tree = screen.getByAltText('Tree') as HTMLImageElement;

    expect(tree.src).toMatch(/tree-icon\.webp$/);
    await user.hover(tree);
    expect(tree.src).toMatch(/tree-icon-color\.webp$/);
    await user.unhover(tree);
    expect(tree.src).toMatch(/tree-icon\.webp$/);
  });

  it('navigates to the matching route when an icon is clicked', async () => {
    const user = userEvent.setup();
    renderAt('/');
    await user.click(screen.getByAltText('Sculpture'));
    expect(screen.getByTestId('location')).toHaveTextContent('/sculpture');
  });
});
