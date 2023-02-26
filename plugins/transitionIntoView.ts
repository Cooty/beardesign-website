export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  nuxtApp.vueApp.directive('transition', {
    mounted: (el: Element) => {
      const transitionIntoViewObserver = new IntersectionObserver(
        (entries, transitionIntoViewObserver) => {
          entries.forEach((entry) => {
            // If element is in view
            if (entry.isIntersecting) {
              // Add class 'enter'
              entry.target.classList.add('entered')
              // Unobserve element
              transitionIntoViewObserver.unobserve(entry.target)
            }
          })
        }
      )
      // Add 'before-enter' class
      el.classList.add('before-enter')
      // Observe element
      if (transitionIntoViewObserver) {
        transitionIntoViewObserver.observe(el)
      }
    },
  })
})
