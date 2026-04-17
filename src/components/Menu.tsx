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
    icon: '/assets/icons/app-icon.png',
    iconColor: '/assets/icons/app-icon-color.png',
    label: 'Apps',
  },
  {
    key: 'cactus',
    id: 'cactus-icon',
    icon: '/assets/icons/cactus-icon.png',
    iconColor: '/assets/icons/cactus-icon-color.png',
    label: 'Cactus',
  },
  {
    key: 'tree',
    id: 'tree-icon',
    icon: '/assets/icons/tree-icon.png',
    iconColor: '/assets/icons/tree-icon-color.png',
    label: 'Tree',
  },
  {
    key: 'sculpture',
    id: 'sculpture-icon',
    icon: '/assets/icons/sculpture-icon.png',
    iconColor: '/assets/icons/sculpture-icon-color.png',
    label: 'Sculpture',
  },
  {
    key: 'vessel',
    id: 'vessel-icon',
    icon: '/assets/icons/vessel-icon.png',
    iconColor: '/assets/icons/vessel-icon-color.png',
    label: 'Vessel',
  },
  {
    key: 'painting',
    id: 'painting-icon',
    icon: '/assets/icons/painting-icon.png',
    iconColor: '/assets/icons/painting-icon-color.png',
    label: 'Painting',
  },
  {
    key: 'advertising',
    id: 'advertising-icon',
    icon: '/assets/icons/advertising-icon.png',
    iconColor: '/assets/icons/advertising-icon-color.png',
    label: 'Advertising',
  },
  {
    key: 'design',
    id: 'design-icon',
    icon: '/assets/icons/design-icon.png',
    iconColor: '/assets/icons/design-icon-color.png',
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
