import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { VMark } from './Logo'
import { ArrowLeft, ArrowRight, Pause, Play } from './Icons'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { assetUrl } from '../lib/assetUrl'

export default function RotatingShowcase({ looks }) {
  const reduce = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 639px)')
  const isTablet = useMediaQuery('(max-width: 1023px)')

  const [rotation, setRotation] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [manualPaused, setManualPaused] = useState(false)
  const dragStart = useRef(null)

  const count = looks.length
  const step = 360 / count
  const radius = isMobile ? 218 : isTablet ? 300 : 372
  const cardWidth = isMobile ? 142 : isTablet ? 190 : 220
  const cardHeight = isMobile ? 188 : isTablet ? 252 : 292

  useEffect(() => {
    if (reduce || hovered || dragging || manualPaused) return undefined
    const timer = window.setInterval(() => setRotation((value) => value + step), 4300)
    return () => window.clearInterval(timer)
  }, [reduce, hovered, dragging, manualPaused, step])

  const rotateBy = (direction) => {
    setRotation((value) => value + direction * step)
  }

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    dragStart.current = { x: event.clientX, rotation }
    setDragging(true)
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!dragging || !dragStart.current) return
    const delta = event.clientX - dragStart.current.x
    setRotation(dragStart.current.rotation + delta * 0.32)
  }

  const endDrag = () => {
    setDragging(false)
    dragStart.current = null
  }

  return (
    <div className="relative mt-10 overflow-hidden border border-white/10 bg-ink-soft/70 sm:mt-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 58% at 50% 52%, rgba(201,169,106,0.13), transparent 68%), linear-gradient(180deg, rgba(247,242,232,0.02), transparent 35%)',
        }}
      />
      <span className="pointer-events-none absolute left-0 top-0 h-px w-24 bg-champagne/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-px w-24 bg-champagne/50" aria-hidden="true" />

      <div className="relative flex flex-col gap-4 border-b border-white/[0.08] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex items-center gap-4">
          <span className="hidden h-px w-8 bg-champagne/60 sm:block" />
          <div>
            <p className="text-[0.52rem] font-semibold uppercase tracking-[0.3em] text-champagne/80">
              The VELORA Rotation
            </p>
            <p className="mt-1.5 text-[0.72rem] font-light text-ivory/40">
              Six curated looks. Drag to explore every angle.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setManualPaused((value) => !value)}
            className="flex h-9 w-9 items-center justify-center border border-white/12 text-ivory/55 transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label={manualPaused ? 'Resume showcase rotation' : 'Pause showcase rotation'}
            aria-pressed={manualPaused}
          >
            {manualPaused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button
            type="button"
            onClick={() => rotateBy(-1)}
            className="flex h-9 w-9 items-center justify-center border border-white/12 text-ivory/55 transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="Rotate showcase left"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            type="button"
            onClick={() => rotateBy(1)}
            className="flex h-9 w-9 items-center justify-center border border-white/12 text-ivory/55 transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="Rotate showcase right"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <div
        className="relative h-[320px] cursor-grab touch-pan-y select-none overflow-hidden [perspective:1700px] active:cursor-grabbing sm:h-[430px] lg:h-[500px]"
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovered(true)
        }}
        onPointerLeave={() => {
          setHovered(false)
          endDrag()
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => {
          endDrag()
          if (event.pointerType !== 'mouse') setHovered(false)
        }}
        onPointerCancel={endDrag}
        role="group"
        aria-label="Rotating 3D fashion showcase. Use the arrow buttons to rotate."
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto h-10 w-[70%] rounded-[50%] bg-champagne/10 blur-2xl"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center">
          <VMark size={isMobile ? 80 : 118} className="opacity-20" />
          <span className="mt-3 text-[0.48rem] font-semibold uppercase tracking-[0.36em] text-ivory/20">
            {String(count).padStart(2, '0')} Looks · One Identity
          </span>
        </div>

        <div
          className="absolute left-1/2 top-1/2 z-10 preserve-3d"
          style={{
            transform: `translate(-50%, -50%) rotateX(-3deg) rotateY(${rotation}deg)`,
            transition: dragging ? 'none' : 'transform 850ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {looks.map((look, index) => (
            <figure
              key={look.src + index}
              className="absolute left-1/2 top-1/2 overflow-hidden border border-white/15 bg-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)] backface-hidden"
              style={{
                width: cardWidth,
                height: cardHeight,
                marginLeft: -cardWidth / 2,
                marginTop: -cardHeight / 2,
                transform: `rotateY(${index * step}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={assetUrl(look.src)}
                alt={look.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable="false"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                <span className="text-[0.44rem] font-semibold uppercase tracking-[0.24em] text-ivory/75">
                  Look {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-1 w-1 rotate-45 bg-champagne" />
              </figcaption>
              <span className="pointer-events-none absolute inset-0 border border-white/10" />
            </figure>
          ))}
        </div>

        <p className="pointer-events-none absolute inset-x-0 bottom-5 z-20 text-center text-[0.46rem] font-semibold uppercase tracking-[0.3em] text-ivory/25">
          Drag to rotate
        </p>
      </div>
    </div>
  )
}
