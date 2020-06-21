import redirect from './redirect'
import { handleClientError, handleServerError } from './error-handler'
import { inject } from "mobx-react";

export const loading = {
  name: 'loading',
  intercept: context => {
    const {  loadingStart, loadingEnd } = this.props.loadingMethod;
    switch (context.type) {
      case 'request':
        break
      case 'response':
      case 'reject':
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
          console.log("Timeout");
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
      console.log("error : " + error.message)
      redirect('/5xx')
      context.suspend = true
      return error.message
    }
  },
}
