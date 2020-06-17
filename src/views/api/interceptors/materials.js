import store from '@/store'
import redirect from './redirect'
import { handleClientError, handleServerError } from './error-handler'

export const loading = {
  name: 'loading',
  intercept: context => {
    switch (context.type) {
      case 'request':
        store.dispatch('addLoading')
        break
      case 'response':
      case 'reject':
        store.dispatch('removeLoading')
        break
      default:
        throw new Error(`unsupported context type: ${context.type}`)
    }
  },
}


export const statusHandler = {
  name: 'statusHandler',
  intercept: context => {
    const error = context.getError()
    if (error.response && error.response.status) {
      const series = Math.floor(error.response.status / 100)
      switch (series) {
        case 4:
          handleClientError(context)
          break
        case 5:
          handleServerError(context)
          break
        default:
          throw new Error(`unsupported status code: ${error.response.status}`)
      }
      context.suspend = true
      return error.response.status
    }
  },
}

export const errorCodeHandler = {
  name: 'errorCodeHandler',
  intercept: context => {
    const error = context.getError()
    if (error.code) {
      switch (error.code) {
        case 'ECONNABORTED':
          store.commit('showToastError', `Timeout (limit: ${error.config.timeout} ms)`)
          break
        default:
          throw new Error(`unsupported error code: ${error.code}`)
      }
      context.suspend = true
      return error.code
    }
  },
}

export const errorMessageHandler = {
  name: 'errorMassageHandler',
  intercept: context => {
    const error = context.getError()
    if (error.message) {
      store.commit('showToastError', error.message)
      redirect('/5xx')
      context.suspend = true
      return error.message
    }
  },
}
