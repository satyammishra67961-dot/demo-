import Reveal, { TextReveal } from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  action,
  className = '',
  titleClassName = '',
  id,
}) {
  const centered = align === 'center'
  const isLight = tone === 'light'

  return (
    <div
      className={`flex flex-col gap-8 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      } ${className}`}
    >
      <div className={centered ? 'max-w-3xl' : 'max-w-2xl'}>
        <Reveal y={16} className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
          <span className={`h-px w-9 ${isLight ? 'bg-champagne/70' : 'bg-champagne'}`} />
          <span
            className={`text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${
              isLight ? 'text-champagne-light/85' : 'text-ink/55'
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>

        <TextReveal
          id={id}
          text={title}
          as="h2"
          delay={0.08}
          className={`mt-5 font-display text-[clamp(2.55rem,5.2vw,5.1rem)] font-light leading-[0.96] tracking-[-0.025em] ${
            isLight ? 'text-ivory' : 'text-ink'
          } ${titleClassName}`}
        />

        {description && (
          <Reveal delay={0.22} y={18}>
            <p
              className={`mt-6 max-w-xl text-[0.94rem] font-light leading-[1.85] ${
                isLight ? 'text-ivory/55' : 'text-ink/55'
              } ${centered ? 'mx-auto' : ''}`}
            >
              {description}
            </p>
          </Reveal>
        )}
      </div>

      {action && (
        <Reveal delay={0.28} y={14} className={centered ? 'mt-2' : 'shrink-0 md:pb-2'}>
          {action}
        </Reveal>
      )}
    </div>
  )
}
