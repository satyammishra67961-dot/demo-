import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  intensity = 7,
  glare = true,
  ...props
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const rotateX = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.4 })
  const rotateY = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.4 })

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(247,242,232,0.16), transparent 52%)`

  const onPointerMove = (event) => {
    if (reduce || event.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    pointerX.set((x - 0.5) * intensity)
    pointerY.set((0.5 - y) * intensity)
    glareX.set(x * 100)
    glareY.set(y * 100)
  }

  const reset = () => {
    pointerX.set(0)
    pointerY.set(0)
    glareX.set(50)
    glareY.set(50)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onBlur={reset}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative [perspective:1200px] ${className}`}
      {...props}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  )
}
