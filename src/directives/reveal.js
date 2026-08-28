/**
 * v-reveal — anima o elemento quando ele entra na tela.
 *
 * Uso:
 *   <div v-reveal>...</div>            → sem atraso
 *   <div v-reveal="0.12">...</div>     → 120ms de atraso (escalonar itens)
 *
 * Respeita "prefers-reduced-motion": quem pediu menos animação
 * recebe o conteúdo já visível.
 */
const semAnimacao =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return
        entrada.target.classList.add('is-in')
        observer.unobserve(entrada.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

export default {
  mounted(el, binding) {
    el.classList.add('reveal')

    if (binding.value) {
      el.style.setProperty('--reveal-delay', `${binding.value}s`)
    }

    if (semAnimacao || !('IntersectionObserver' in window)) {
      el.classList.add('is-in')
      return
    }

    getObserver().observe(el)
  },

  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
