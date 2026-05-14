import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { getGalleryFromDisk } from '../galleryManifest';
import {
  GALLERY_TAB_ORDER,
  getFallbackItemsForCategory,
} from '../galleryFallback';

const gridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.96,
    transition: { duration: 0.28 },
  },
};

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir < 0 ? 56 : -56,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function PortfolioGallery() {
  const { byCategory: diskByCategory, total: diskTotal } = useMemo(
    () => getGalleryFromDisk(),
    []
  );
  const useDiskGallery = diskTotal > 0;

  const [activeKey, setActiveKey] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [slideDir, setSlideDir] = useState(0);
  const closeBtnRef = useRef(null);

  const selectCategory = useCallback((folderKey) => {
    setLightboxOpen(false);
    setActiveKey(folderKey);
  }, []);

  const items = useMemo(() => {
    if (useDiskGallery) {
      if (activeKey === 'All') {
        /** @type {{ src: string; alt: string; category: string }[]} */
        const all = [];
        for (const [cat, urls] of Object.entries(diskByCategory)) {
          for (const src of urls) {
            all.push({
              src,
              alt: `${cat} — project gallery, Myaluza Civils`,
              category: cat,
            });
          }
        }
        return all.sort((a, b) => a.src.localeCompare(b.src));
      }
      const urls = diskByCategory[activeKey] ?? [];
      return urls.map((src) => ({
        src,
        alt: `${activeKey} — project gallery, Myaluza Civils`,
        category: activeKey,
      }));
    }
    return getFallbackItemsForCategory(activeKey);
  }, [activeKey, diskByCategory, useDiskGallery]);

  const countsByKey = useMemo(() => {
    /** @type {Record<string, number>} */
    const m = { All: 0 };
    if (useDiskGallery) {
      for (const [cat, urls] of Object.entries(diskByCategory)) {
        m[cat] = urls.length;
      }
      m.All = Object.values(diskByCategory).reduce((n, a) => n + a.length, 0);
    } else {
      for (const { folderKey } of GALLERY_TAB_ORDER) {
        if (folderKey === 'All') continue;
        m[folderKey] = getFallbackItemsForCategory(folderKey).length;
      }
      m.All = getFallbackItemsForCategory('All').length;
    }
    return m;
  }, [diskByCategory, useDiskGallery]);

  const openLightbox = useCallback((index) => {
    setSlideDir(0);
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const paginate = useCallback(
    (newDirection) => {
      setSlideDir(newDirection);
      setLightboxIndex((prev) => {
        const len = items.length;
        if (len === 0) return prev;
        let next = prev + newDirection;
        if (next < 0) next = len - 1;
        if (next >= len) next = 0;
        return next;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, [lightboxOpen, closeLightbox, paginate]);

  const current = items[lightboxIndex];

  return (
    <div className="portfolio-gallery">
      <div className="portfolio-filter-tabs" role="tablist" aria-label="Project categories">
        {GALLERY_TAB_ORDER.map(({ folderKey, label }) => {
          const count = countsByKey[folderKey] ?? 0;
          const isEmpty = folderKey !== 'All' && count === 0;
          const isActive = activeKey === folderKey;
          return (
            <button
              key={folderKey}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="portfolio-gallery-panel"
              id={`portfolio-tab-${folderKey.replace(/\s+/g, '-')}`}
              disabled={isEmpty}
              className={`portfolio-filter-tab ${isActive ? 'is-active' : ''} ${isEmpty ? 'is-empty' : ''}`}
              onClick={() => !isEmpty && selectCategory(folderKey)}
            >
              <span className="portfolio-filter-tab-label">{label}</span>
              {folderKey !== 'All' && (
                <span className="portfolio-filter-tab-count">{count}</span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id="portfolio-gallery-panel"
        role="tabpanel"
        aria-labelledby={`portfolio-tab-${activeKey.replace(/\s+/g, '-')}`}
        className="portfolio-gallery-panel"
      >
        {!useDiskGallery && (
          <p className="portfolio-gallery-hint">
            Add your own photos under{' '}
            <code className="portfolio-gallery-code">src/assets/Gallery/&lt;Category&gt;/</code> to
            replace these samples.
          </p>
        )}

        <AnimatePresence mode="wait">
          <Motion.div
            key={activeKey}
            className="portfolio-masonry"
            variants={gridContainer}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {items.length === 0 ? (
              <p className="portfolio-gallery-empty">No images in this category yet.</p>
            ) : (
              items.map((item, index) => (
                <Motion.div
                  key={`${activeKey}-${item.src}-${index}`}
                  className="portfolio-masonry-item"
                  variants={gridItem}
                  layout={false}
                >
                  <button
                    type="button"
                    className="portfolio-masonry-hit"
                    onClick={() => openLightbox(index)}
                    aria-label={`Open image ${index + 1}: ${item.alt}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="portfolio-masonry-img"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
                    />
                    <span className="portfolio-masonry-shade" aria-hidden />
                    <span className="portfolio-masonry-zoom" aria-hidden>
                      View
                    </span>
                  </button>
                </Motion.div>
              ))
            )}
          </Motion.div>
        </AnimatePresence>
      </div>

      <div className="portfolio-gallery-footer">
        <a href="#intelligence" className="btn-primary portfolio-view-all">
          View all projects — request profile
        </a>
      </div>

      <AnimatePresence>
        {lightboxOpen && items.length > 0 && current && (
          <Motion.div
            className="portfolio-lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <Motion.div
              className="portfolio-lightbox-inner"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                ref={closeBtnRef}
                className="portfolio-lightbox-close"
                aria-label="Close gallery"
                onClick={closeLightbox}
              >
                ×
              </button>

              <button
                type="button"
                className="portfolio-lightbox-arrow portfolio-lightbox-arrow-prev"
                aria-label="Previous image"
                onClick={() => paginate(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="portfolio-lightbox-arrow portfolio-lightbox-arrow-next"
                aria-label="Next image"
                onClick={() => paginate(1)}
              >
                ›
              </button>

              <div className="portfolio-lightbox-stage">
                <AnimatePresence initial={false} custom={slideDir} mode="wait">
                  <Motion.img
                    key={lightboxIndex}
                    src={current.src}
                    alt={current.alt}
                    className="portfolio-lightbox-img"
                    custom={slideDir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  />
                </AnimatePresence>
              </div>

              <div className="portfolio-lightbox-meta">
                <span className="portfolio-lightbox-counter">
                  {lightboxIndex + 1} of {items.length}
                </span>
                {current.category && (
                  <span className="portfolio-lightbox-cat">{current.category}</span>
                )}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
