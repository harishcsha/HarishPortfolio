import { useState, useEffect, useRef, useCallback } from 'react'

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    let rafId
    const handler = () => {
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      window.removeEventListener('scroll', handler)
      cancelAnimationFrame(rafId)
    }
  }, [])
  return scrollY
}

export function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    let rafId
    const handler = (e) => {
      rafId = requestAnimationFrame(() => {
        setMouse({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        })
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handler)
      cancelAnimationFrame(rafId)
    }
  }, [])
  return mouse
}

export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    const el = ref.current
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

export function useSmoothScroll() {
  const [smoothY, setSmoothY] = useState(0)
  const targetY = useRef(0)
  const currentY = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    const onScroll = () => { targetY.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      currentY.current = lerp(currentY.current, targetY.current, 0.09)
      setSmoothY(currentY.current)
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return smoothY
}
