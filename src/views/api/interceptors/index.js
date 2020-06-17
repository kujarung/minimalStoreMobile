import { request, response, reject } from './composite'
import { logInterceptor } from '../api-environment'
import { loading, statusHandler, errorCodeHandler, errorMessageHandler } from './materials'

export default {
  request: {
    resolve: request([logInterceptor, loading]),
    reject: reject([logInterceptor, loading, statusHandler, errorCodeHandler, errorMessageHandler]),
  },

  response: {
    resolve: response([logInterceptor, loading]),
    reject: reject([logInterceptor, loading, statusHandler, errorCodeHandler, errorMessageHandler]),
  },
}
