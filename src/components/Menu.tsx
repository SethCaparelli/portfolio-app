import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { CategoryKey } from '../types';

interface MenuItem {
  key: CategoryKey;
  id: string;
  icon: string;
  iconColor: string;
  label: string;
  to: string;
}

const items: MenuItem[] = [
  {
    key: 'app',
    id: 'app-icon',
    icon: '/assets/icons/app-icon.webp',
    iconColor: '/assets/icons/app-icon-color.webp',
    label: 'Apps',
    to: '/',
  },
  {
    key: 'cactus',
    id: 'cactus-icon',
    icon: '/assets/icons/cactus-icon.webp',
    iconColor: '/assets/icons/cactus-icon-color.webp',
    label: 'Cactus',
    to: '/cactus',
  },
  {
    key: 'tree',
    id: 'tree-icon',
    icon: '/assets/icons/tree-icon.webp',
    iconColor: '/assets/icons/tree-icon-color.webp',
    label: 'Tree',
    to: '/tree',
  },
  {
    key: 'sculpture',
    id: 'sculpture-icon',
    icon: '/assets/icons/sculpture-icon.webp',
    iconColor: '/assets/icons/sculpture-icon-color.webp',
    label: 'Sculpture',
    to: '/sculpture',
  },
  {
    key: 'vessel',
    id: 'vessel-icon',
    icon: '/assets/icons/vessel-icon.webp',
    iconColor: '/assets/icons/vessel-icon-color.webp',
    label: 'Vessel',
    to: '/vessel',
  },
  {
    key: 'painting',
    id: 'painting-icon',
    icon: '/assets/icons/painting-icon.webp',
    iconColor: '/assets/icons/painting-icon-color.webp',
    label: 'Painting',
    to: '/painting',
  },
  {
    key: 'advertising',
    id: 'advertising-icon',
    icon: '/assets/icons/advertising-icon.webp',
    iconColor: '/assets/icons/advertising-icon-color.webp',
    label: 'Advertising',
    to: '/advertising',
  },
  {
    key: 'design',
    id: 'design-icon',
    icon: '/assets/icons/design-icon.webp',
    iconColor: '/assets/icons/design-icon-color.webp',
    label: 'Design',
    to: '/design',
  },
];

export default function Menu() {
  const [hovered, setHovered] = useState<CategoryKey | null>(null);

  return (
    <div id="menu">
      {items.map((item) => (
        <NavLink
          key={item.key}
          to={item.to}
          end={item.to === '/'}
          aria-label={item.label}
          onMouseEnter={() => setHovered(item.key)}
          onMouseLeave={() => setHovered(null)}
        >
          {({ isActive }) => (
            <img
              id={item.id}
              className="icon-image"
              src={isActive || hovered === item.key ? item.iconColor : item.icon}
              alt={item.label}
            />
          )}
        </NavLink>
      ))}
    </div>
  );
}
