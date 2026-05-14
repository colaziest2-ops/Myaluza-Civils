/**
 * When no files exist under src/assets/Gallery/, the UI still shows
 * representative work using existing marketing images.
 */
import concreteImg from './assets/concrete retaining walls and culverts.jpg';
import pavingImg from './assets/Paving & Sidewalk Projects.jpg';
import waterReticulationImg from './assets/Water Reticulation Network.jpg';
import commercialBuildingImg from './assets/Commercial Building Construction.jpg';
import renovationsImg from './assets/Structural Renovations & Extensions.jpg';
import roadSurfacingImg from './assets/Road Surfacing & Kerbing.jpg';

/** Folder keys must match on-disk Gallery folder names when you add photos. */
export const GALLERY_TAB_ORDER = [
  { folderKey: 'All', label: 'All' },
  { folderKey: 'Civil works', label: 'Civil Works' },
  { folderKey: 'Foundations', label: 'Foundations' },
  { folderKey: 'Earthworks', label: 'Earthworks' },
  { folderKey: 'Reservoir', label: 'Reservoir' },
  { folderKey: 'Mechanical Works', label: 'Mechanical Works' },
  { folderKey: 'Drainage Works', label: 'Drainage Works' },
];

/** Tab keys (no "All") — used by galleryManifest for nested-folder matching. */
export const GALLERY_CATEGORY_FOLDER_KEYS = GALLERY_TAB_ORDER.filter((t) => t.folderKey !== 'All').map(
  (t) => t.folderKey
);

/** @type {Record<string, { src: string; alt: string }[]>} */
export const FALLBACK_IMAGES_BY_CATEGORY = {
  'Civil works': [
    { src: waterReticulationImg, alt: 'Water reticulation network — Myaluza Civils' },
    { src: roadSurfacingImg, alt: 'Road surfacing and kerbing' },
    { src: pavingImg, alt: 'Paving and sidewalk projects' },
    { src: concreteImg, alt: 'Concrete retaining walls and culverts' },
  ],
  Foundations: [
    { src: concreteImg, alt: 'Concrete structures and foundations' },
    { src: renovationsImg, alt: 'Structural renovations and extensions' },
  ],
  Earthworks: [
    { src: pavingImg, alt: 'Earthworks and paving infrastructure' },
    { src: roadSurfacingImg, alt: 'Road surfacing and earth preparation' },
  ],
  Reservoir: [{ src: waterReticulationImg, alt: 'Water reticulation and reservoir-related work' }],
  'Mechanical Works': [
    { src: commercialBuildingImg, alt: 'Commercial building construction' },
    { src: renovationsImg, alt: 'Structural renovations and extensions' },
  ],
  'Drainage Works': [
    { src: concreteImg, alt: 'Culverts and drainage-related concrete works' },
    { src: waterReticulationImg, alt: 'Water network and drainage infrastructure' },
  ],
};

/**
 * @returns {{ src: string; alt: string; category: string }[]}
 */
export function buildFallbackItemsAll() {
  const used = new Set();
  /** @type {{ src: string; alt: string; category: string }[]} */
  const out = [];
  for (const { folderKey } of GALLERY_TAB_ORDER) {
    if (folderKey === 'All') continue;
    const list = FALLBACK_IMAGES_BY_CATEGORY[folderKey] ?? [];
    for (const item of list) {
      const key = item.src;
      if (used.has(key)) continue;
      used.add(key);
      out.push({ ...item, category: folderKey });
    }
  }
  return out;
}

/**
 * @param {string} folderKey
 * @param {Record<string, string[]>} byCategory
 */
export function getFallbackItemsForCategory(folderKey) {
  if (folderKey === 'All') return buildFallbackItemsAll();
  const list = FALLBACK_IMAGES_BY_CATEGORY[folderKey] ?? [];
  return list.map((item) => ({ ...item, category: folderKey }));
}
