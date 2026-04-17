import { lazy, Suspense, useState } from 'react';
import type { Work as WorkT } from '../types';

const Lightbox = lazy(() => import('yet-another-react-lightbox'));
const AppModal = lazy(() => import('./AppModal'));

interface Props {
  work: WorkT;
  index: number;
  collection: WorkT[];
}

export default function Work({ work, index, collection }: Props) {
  const [open, setOpen] = useState(false);

  if (work.kind === 'app') {
    return (
      <div className="work">
        <small id="work-title">{work.name}</small>
        <img
          src={work.url}
          alt={work.name}
          id="work-img"
          loading="lazy"
          decoding="async"
          onClick={() => setOpen(true)}
        />
        {open ? (
          <Suspense fallback={null}>
            <AppModal work={work} open={open} onClose={() => setOpen(false)} />
          </Suspense>
        ) : null}
      </div>
    );
  }

  const images = collection.flatMap((w) => (w.kind === 'image' ? [{ src: w.url }] : []));

  return (
    <div className="work">
      {work.name ? <small id="work-title">{work.name}</small> : null}
      <img
        id="work-img"
        src={work.url}
        alt={work.name ?? 'artwork'}
        loading="lazy"
        decoding="async"
        onClick={() => setOpen(true)}
      />
      {open ? (
        <Suspense fallback={null}>
          <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images} />
        </Suspense>
      ) : null}
    </div>
  );
}
