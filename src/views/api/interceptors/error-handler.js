import store from '@/store'
import redirect from './redirect'

export const handleClientError = context => {
  const error = context.getError()
  const { status } = error.response
  switch (status) {
    case 401:
      unauthorized(context)
      break
    case 403:
      forbidden(context)
      break
    default:
      store.commit('showToastError', `Client Error (${status})`)
  }
}
export const handleServerError = context => {
  const error = context.getError()
  const { status } = error.response
  store.commit('showToastError', `Server Error (${status})`)
}

function unauthorized(context) {
  store.commit('deleteUserInfo')
  window.location.href = process.env.VUE_APP_USER_API_URL + '/login/callback'
}

function forbidden(context) {
  const { customClaims } = store.getters.userInfo
  const permissions = Object.keys(customClaims).filter(key => customClaims[key])
  if (permissions.length > 0) {
    redirect('/403')
  } else {
    redirect('/notPermitted')
  }
}
