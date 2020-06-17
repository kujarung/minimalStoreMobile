import InterceptorContext from './interceptor-context'

export const request = interceptors => {
  return async config => {
    const context = new InterceptorContext('request', { config })
    await executeAsync(context, interceptors)
    return config
  }
}

export const response = interceptors => {
  return async response => {
    const context = new InterceptorContext('response', { response })
    await executeAsync(context, interceptors)
    return response
  }
}

export const reject = interceptors => {
  return async error => {
    const context = new InterceptorContext('reject', { error })
    await executeAsync(context, interceptors)
    error.rejectContext = context
    throw error
  }
}

async function executeAsync(context, interceptors = []) {
  for (let index = 0; index < interceptors.length; index++) {
    const interceptor = interceptors[index]
    try {
      const result = await interceptor.intercept(context)
      context.addHistory(index, interceptor, result)
    } catch (error) {
      context.addHistory(index, interceptor, error)
      throw context.error(error)
    }
    if (context.isSuspend()) {
      break
    }
  }
}
