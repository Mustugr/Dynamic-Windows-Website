import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const attach = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    }

    attach()
    const t = setTimeout(attach, 200)

    // Watch the DOM for any newly-added `.reveal` nodes (e.g. when a page
    // filters a list, mounts a modal, or lazy-renders a section). Without
    // this, nodes added after the initial attach stay at opacity: 0 forever.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.classList?.contains('reveal') && !node.classList.contains('is-visible')) {
            io.observe(node)
          }
          node.querySelectorAll?.('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(t)
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  return null
}
