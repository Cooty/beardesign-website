import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // needed because when using scroll snap and coming back to the
    // HP we always land on the bottom of the page
    if (to.fullPath === '/') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 })
        }, 100)
      })
    }
  },
}
