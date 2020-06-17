import router from '@/router'

export default path => {
  if (router.currentRoute.path !== path) {
    router.push(path)
  }
}
