import { useState } from 'react';
import { categories } from '../data/categories';
import type { CategoryKey } from '../types';
import Header from './Header';
import Menu from './Menu';
import Work from './Work';
import Footer from './Footer';

export default function App() {
  const [selected, setSelected] = useState<CategoryKey>('app');
  const category = categories[selected];
  const isLarge = category.works.length > 3;

  return (
    <div className="App">
      <Header />
      <div id="work-body-container">
        <h3 id="work-header">{category.title}</h3>
        <div className={isLarge ? 'work-body' : 'work-body-small'}>
          {category.works.map((work, index) => (
            <Work
              key={`${category.key}-${index}`}
              work={work}
              index={index}
              collection={category.works}
            />
          ))}
        </div>
        <Menu selected={selected} onSelect={setSelected} />
      </div>
      <Footer />
    </div>
  );
}
