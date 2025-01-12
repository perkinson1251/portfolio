export default defineNuxtRouteMiddleware((to, from) => {
  if (!from) {
    to.meta.pageTransition = { name: 'page' }
    return
  }

  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length

  to.meta.pageTransition = {
    name: toDepth < fromDepth ? 'slide-right' : 'slide-left',
    mode: 'out-in',
  }
})
