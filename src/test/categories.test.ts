import { describe, it, expect } from 'vitest';
import { categories, categoryOrder } from '../data/categories';
import type { CategoryKey } from '../types';

describe('categories data', () => {
  it('has every key listed in categoryOrder', () => {
    for (const key of categoryOrder) {
      expect(categories[key]).toBeDefined();
      expect(categories[key].key).toBe(key);
    }
  });

  it('every work has a non-empty url', () => {
    for (const key of categoryOrder) {
      for (const work of categories[key].works) {
        expect(work.url).toMatch(/^\/assets\//);
      }
    }
  });

  it('app-kind works expose name, description, technologies, and at least one link', () => {
    for (const work of categories.app.works) {
      if (work.kind !== 'app') throw new Error('app category must contain app works');
      expect(work.name.length).toBeGreaterThan(0);
      expect(work.description.length).toBeGreaterThan(0);
      expect(work.technologies.length).toBeGreaterThan(0);
      expect(work.code ?? work.site).toMatch(/^https?:\/\//);
      if (work.code) expect(work.code).toMatch(/^https:\/\//);
      if (work.site) expect(work.site).toMatch(/^https?:\/\//);
    }
  });

  it('non-app categories contain only image works', () => {
    const nonApp: CategoryKey[] = categoryOrder.filter((k) => k !== 'app');
    for (const key of nonApp) {
      for (const work of categories[key].works) {
        expect(work.kind).toBe('image');
      }
    }
  });
});
