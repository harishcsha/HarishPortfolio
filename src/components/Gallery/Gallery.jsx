import { useState, useEffect, useCallback, useRef } from 'react'
import { useInView } from '../../hooks/useParallax'
import { GALLERY_ALBUMS } from '../../data/portfolio'
import './Gallery.css'

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ album, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const imgs = album.images
  const current = imgs[index]
  const touchStartX = useRef(null)

  const prev = useCallback(() => setIndex(i => (i - 1 + imgs.length) % imgs.length), [imgs.length])
  const next = useCallback(() => setIndex(i => (i + 1) % imgs.length), [imgs.length])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next, onClose])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
      <div className="lightbox__backdrop" onClick={onClose} />

      <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>

      <div
        className="lightbox__stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">
          <span>‹</span>
        </button>

        <div className="lightbox__img-wrap">
          <img
            src={current.src}
            alt={current.caption}
            className="lightbox__img"
            key={current.id}
          />
        </div>

        <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">
          <span>›</span>
        </button>
      </div>

      <div className="lightbox__meta">
        <div className="lightbox__meta-left">
          <p className="lightbox__caption">{current.caption}</p>
          <span className="lightbox__year">{current.year}</span>
        </div>
        <div className="lightbox__counter">
          {index + 1} / {imgs.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="lightbox__thumbs">
        {imgs.map((img, i) => (
          <button
            key={img.id}
            className={`lightbox__thumb${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={img.thumb} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Album Grid ────────────────────────────────────────────────────────────────
function AlbumView({ album, onImageClick }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`album-grid fade-up${inView ? ' visible' : ''}`}
    >
      {album.images.map((img, i) => (
        <button
          key={img.id}
          className="album-grid__item"
          onClick={() => onImageClick(i)}
          style={{ transitionDelay: `${i * 60}ms` }}
          aria-label={`Open ${img.caption}`}
        >
          <img src={img.thumb} alt={img.caption} loading="lazy" />
          <div className="album-grid__overlay">
            <span className="album-grid__icon">⊕</span>
            <p className="album-grid__caption">{img.caption}</p>
            <span className="album-grid__year">{img.year}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

// ── Gallery Section ───────────────────────────────────────────────────────────
export default function Gallery() {
  const [ref, inView] = useInView()
  const [activeAlbum, setActiveAlbum] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { albumId, imageIndex }

  const handleAlbumClick = (albumId) => {
    setActiveAlbum(prev => prev === albumId ? null : albumId)
  }

  const handleImageClick = (albumId, imageIndex) => {
    setLightbox({ albumId, imageIndex })
  }

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const activeAlbumData = GALLERY_ALBUMS.find(a => a.id === activeAlbum)
  const lightboxAlbum = lightbox ? GALLERY_ALBUMS.find(a => a.id === lightbox.albumId) : null

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-inner">
        <div className={`fade-up${inView ? ' visible' : ''}`} ref={ref}>
          <div className="section-label">03 — Gallery</div>
          <h2 className="section-heading">Work, life &amp; <span className="accent">milestones</span>.</h2>
        </div>

        {/* Album Tabs */}
        <div className="gallery__albums">
          {GALLERY_ALBUMS.map((album, i) => {
            const [aref, ainView] = useInView()
            return (
              <button
                key={album.id}
                ref={aref}
                className={`gallery__album-btn fade-up${ainView ? ' visible' : ''}${activeAlbum === album.id ? ' active' : ''}`}
                style={{ transitionDelay: `${i * 55}ms` }}
                onClick={() => handleAlbumClick(album.id)}
                aria-expanded={activeAlbum === album.id}
              >
                <span className="gallery__album-icon">{album.icon}</span>
                <span className="gallery__album-label">{album.label}</span>
                <span className="gallery__album-count">{album.images.length}</span>
              </button>
            )
          })}
        </div>

        {/* Album description */}
        {activeAlbumData && (
          <p className="gallery__album-desc">{activeAlbumData.description}</p>
        )}

        {/* Image grid */}
        {activeAlbumData ? (
          <AlbumView
            album={activeAlbumData}
            onImageClick={(i) => handleImageClick(activeAlbum, i)}
          />
        ) : (
          <div className="gallery__empty">
            <span className="gallery__empty-icon">🖼</span>
            <p>Select an album above to explore photos</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && lightboxAlbum && (
        <Lightbox
          album={lightboxAlbum}
          startIndex={lightbox.imageIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
