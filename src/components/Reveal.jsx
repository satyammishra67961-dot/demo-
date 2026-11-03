import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 26,
  once = true,
  amount = 0.2,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </Tag>
  )
}

export function TextReveal({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  once = true,
  stagger = 0.045,
  id,
}) {
  const reduce = useReducedMotion()
  const Tag = as
  const words = text.split(' ')

  return (
    <Tag className={className} id={id}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: '110%', rotate: 1.5 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once, margin: '-40px' }}
            transition={{
              duration: 0.9,
              delay: delay + index * stagger,
              ease,
            }}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
