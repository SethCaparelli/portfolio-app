#!/usr/bin/env node
/**
 * Resize and convert icon PNGs to WebP.
 * Re-runnable: regenerates .webp next to each .png; idempotent.
 *
 * Usage: pnpm icons:optimize
 */
import sharp from 'sharp';
import { join } from 'node:path';
import { stat } from 'node:fs/promises';

const ICONS_DIR = 'public/assets/icons';

const MENU_ICON_NAMES = [
  'app',
  'cactus',
  'tree',
  'sculpture',
  'vessel',
  'painting',
  'advertising',
  'design',
];

// CSS-rendered display sizes (×2 for retina).
const TARGETS = [
  // Menu icons render at ~30px tall in CSS.
  ...MENU_ICON_NAMES.flatMap((name) =>
    ['', '-color'].map((variant) => ({
      src: `${name}-icon${variant}.png`,
      dst: `${name}-icon${variant}.webp`,
      resize: { height: 80, withoutEnlargement: true },
    })),
  ),
  // Profile picture renders at 200px square (border-radius 50%).
  {
    src: 'profile.png',
    dst: 'profile.webp',
    resize: { width: 400, height: 400, fit: 'cover' },
  },
  // Site logo renders at 75x75.
  {
    src: 'personal-logo.png',
    dst: 'personal-logo.webp',
    resize: {
      width: 150,
      height: 150,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  },
];

async function size(path) {
  try {
    return (await stat(path)).size;
  } catch {
    return 0;
  }
}

let totalIn = 0;
let totalOut = 0;

for (const t of TARGETS) {
  const src = join(ICONS_DIR, t.src);
  const dst = join(ICONS_DIR, t.dst);
  const before = await size(src);
  if (before === 0) {
    console.warn(`skip ${t.src} (missing)`);
    continue;
  }
  await sharp(src).resize(t.resize).webp({ quality: 85, effort: 6 }).toFile(dst);
  const after = await size(dst);
  totalIn += before;
  totalOut += after;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`${t.src.padEnd(32)} ${(before / 1024).toFixed(1)} KB -> ${(after / 1024).toFixed(1)} KB (-${pct}%)`);
}

console.log(
  `\nTotal: ${(totalIn / 1024).toFixed(1)} KB -> ${(totalOut / 1024).toFixed(1)} KB (-${((1 - totalOut / totalIn) * 100).toFixed(0)}%)`,
);
