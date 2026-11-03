import { useEffect, useRef } from 'react'

export function useDialogFocus(active, containerRef, onClose) {
  const previousFocus = useRef(null)
  const closeRef = useRef(onClose)

  useEffect(() => {
    closeRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!active) return undefined
    previousFocus.current = document.activeElement

    const getFocusable = () => {
      const node = containerRef.current
      if (!node) return []
      return Array.from(
        node.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null || element === document.activeElement)
    }

    const timer = window.setTimeout(() => {
      getFocusable()[0]?.focus()
    }, 60)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeRef.current?.()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = getFocusable()
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
      const node = previousFocus.current
      if (node && typeof node.focus === 'function' && document.contains(node)) {
        node.focus({ preventScroll: true })
      }
    }
  }, [active, containerRef])
}
