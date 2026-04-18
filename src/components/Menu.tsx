import { useState } from 'react';
import type { CategoryKey } from '../types';

interface MenuItem {
  key: CategoryKey;
  id: string;
  icon: string;
  iconColor: string;
  label: string;
}

const items: MenuItem[] = [
  {
    key: 'app',
    id: 'app-icon',
    icon: '/assets/icons/app-icon.webp',
    iconColor: '/assets/icons/app-icon-color.webp',
    label: 'Apps',
  },
  {
    key: 'cactus',
    id: 'cactus-icon',
    icon: '/assets/icons/cactus-icon.webp',
    iconColor: '/assets/icons/cactus-icon-color.webp',
    label: 'Cactus',
  },
  {
    key: 'tree',
    id: 'tree-icon',
    icon: '/assets/icons/tree-icon.webp',
    iconColor: '/assets/icons/tree-icon-color.webp',
    label: 'Tree',
  },
  {
    key: 'sculpture',
    id: 'sculpture-icon',
    icon: '/assets/icons/sculpture-icon.webp',
    iconColor: '/assets/icons/sculpture-icon-color.webp',
    label: 'Sculpture',
  },
  {
    key: 'vessel',
    id: 'vessel-icon',
    icon: '/assets/icons/vessel-icon.webp',
    iconColor: '/assets/icons/vessel-icon-color.webp',
    label: 'Vessel',
  },
  {
    key: 'painting',
    id: 'painting-icon',
    icon: '/assets/icons/painting-icon.webp',
    iconColor: '/assets/icons/painting-icon-color.webp',
    label: 'Painting',
  },
  {
    key: 'advertising',
    id: 'advertising-icon',
    icon: '/assets/icons/advertising-icon.webp',
    iconColor: '/assets/icons/advertising-icon-color.webp',
    label: 'Advertising',
  },
  {
    key: 'design',
    id: 'design-icon',
    icon: '/assets/icons/design-icon.webp',
    iconColor: '/assets/icons/design-icon-color.webp',
    label: 'Design',
  },
];

interface Props {
  selected: CategoryKey;
  onSelect: (key: CategoryKey) => void;
}

export default function Menu({ selected, onSelect }: Props) {
  const [hovered, setHovered] = useState<CategoryKey | null>(null);

  return (
    <div id="menu">
      {items.map((item) => {
        const isActive = hovered === item.key || selected === item.key;
        return (
          <img
            key={item.key}
            id={item.id}
            className="icon-image"
            src={isActive ? item.iconColor : item.icon}
            alt={item.label}
            onMouseEnter={() => setHovered(item.key)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect(item.key)}
          />
        );
      })}
    </div>
  );
}
