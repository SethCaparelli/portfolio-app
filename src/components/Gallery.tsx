import { Navigate, useParams } from 'react-router-dom';
import { categories, categoryOrder } from '../data/categories';
import type { CategoryKey } from '../types';
import Menu from './Menu';
import Work from './Work';

interface Props {
  defaultCategory?: CategoryKey;
}

const isCategoryKey = (value: string | undefined): value is CategoryKey =>
  !!value && (categoryOrder as string[]).includes(value);

export default function Gallery({ defaultCategory }: Props) {
  const { category } = useParams();

  const key = category ?? defaultCategory;
  if (!isCategoryKey(key)) {
    return <Navigate to="/" replace />;
  }

  const cat = categories[key];
  const isLarge = cat.works.length > 3;

  return (
    <div id="work-body-container">
      <h3 id="work-header">{cat.title}</h3>
      <div className={isLarge ? 'work-body' : 'work-body-small'}>
        {cat.works.map((work, index) => (
          <Work key={`${cat.key}-${index}`} work={work} index={index} collection={cat.works} />
        ))}
      </div>
      <Menu />
    </div>
  );
}
