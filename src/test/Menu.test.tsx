import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Menu from '../components/Menu';

describe('Menu', () => {
  it('renders all 8 category icons', () => {
    render(<Menu selected="app" onSelect={() => {}} />);
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

  it('shows the color icon for the selected category', () => {
    render(<Menu selected="cactus" onSelect={() => {}} />);
    const cactus = screen.getByAltText('Cactus') as HTMLImageElement;
    expect(cactus.src).toMatch(/cactus-icon-color\.png$/);
  });

  it('swaps to the color icon on hover and back on leave', async () => {
    const user = userEvent.setup();
    render(<Menu selected="app" onSelect={() => {}} />);
    const tree = screen.getByAltText('Tree') as HTMLImageElement;

    expect(tree.src).toMatch(/tree-icon\.png$/);
    await user.hover(tree);
    expect(tree.src).toMatch(/tree-icon-color\.png$/);
    await user.unhover(tree);
    expect(tree.src).toMatch(/tree-icon\.png$/);
  });

  it('calls onSelect with the clicked category key', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Menu selected="app" onSelect={onSelect} />);

    await user.click(screen.getByAltText('Sculpture'));
    expect(onSelect).toHaveBeenCalledWith('sculpture');
  });
});
