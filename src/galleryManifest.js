/**
 * Build-time map of images under src/assets/Gallery/...
 * Vite resolves import.meta.glob at build time.
 *
 * Category for each image:
 * - Walk folder segments after "Gallery" (deepest wins).
 * - If a segment matches a tab key (case-insensitive) or a known alias, use that tab.
 * - Otherwise use the first segment (top-level folder), e.g. Foundations/Water + Pluming → Foundations.
 */
import { GALLERY_CATEGORY_FOLDER_KEYS } from './galleryFallback.js';

// Brace includes common case variants (Windows paths often differ in casing).
const modules = import.meta.glob(
  './assets/Gallery/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,gif,GIF}',
  {
    eager: true,
    import: 'default',
  }
);

/** Map lowercased folder name → canonical tab key */
const FOLDER_ALIASES = new Map([
  ['mechenical works', 'Mechanical Works'],
  ['mechanical works', 'Mechanical Works'],
]);

/**
 * @param {string} segment
 * @returns {string | null}
 */
function segmentToTabKey(segment) {
  const lower = segment.toLowerCase();
  if (FOLDER_ALIASES.has(lower)) return FOLDER_ALIASES.get(lower);
  const exact = GALLERY_CATEGORY_FOLDER_KEYS.find((k) => k.toLowerCase() === lower);
  return exact ?? null;
}

/**
 * @param {string[]} segments folder names only (no filename), e.g. ['Foundations','Drainage Works']
 * @returns {string}
 */
function resolveCategory(segments) {
  if (segments.length === 0) return 'Other';
  for (let i = segments.length - 1; i >= 0; i--) {
    const key = segmentToTabKey(segments[i]);
    if (key) return key;
  }
  const topKey = segmentToTabKey(segments[0]);
  if (topKey) return topKey;
  return segments[0];
}

/** @type {Record<string, string[]>} */
const byCategory = {};

for (const path of Object.keys(modules)) {
  const parts = path.split(/[/\\]/);
  const gi = parts.findIndex((p) => p.toLowerCase() === 'gallery');
  if (gi < 0) continue;
  const after = parts.slice(gi + 1);
  if (after.length < 2) continue;
  const segments = after.slice(0, -1);
  const url = modules[path];
  if (typeof url !== 'string') continue;
  const category = resolveCategory(segments);
  (byCategory[category] ??= []).push(url);
}

for (const k of Object.keys(byCategory)) {
  byCategory[k].sort();
}

/**
 * @returns {{ byCategory: Record<string, string[]>, total: number }}
 */
export function getGalleryFromDisk() {
  const total = Object.values(byCategory).reduce((n, arr) => n + arr.length, 0);
  return { byCategory, total };
}
