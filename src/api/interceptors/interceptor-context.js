export default class InterceptorContext {
  constructor(type, attributes) {
    this.type = type
    this.attributes = Object.assign({}, attributes)
    if (!this.attributes['config']) {
      this.attributes['config'] = discoverConfig(this.attributes)
    }
    this.history = []
    this.suspend = false
  }

  getUrl() {
    const config = this.getConfig()
    return requireProperty(config, 'url')
  }

  getConfig() {
    return this.requireAttribute('config')
  }

  getError() {
    return this.requireAttribute('error')
  }

  getResponse() {
    return this.requireAttribute('response')
  }

  getResults(name) {
    const results = this.history
      .map(item => requireProperty(item, 'result'))
      .filter(result => requireProperty(result, 'name') === name)
      .map(result => requireProperty(result, 'value'))
    return results
  }

  putAttribute(name, value) {
    this.attributes[name] = value
  }

  findAttribute(name) {
    return findProperty(this.attributes, name)
  }

  requireAttribute(name) {
    return requireProperty(this.attributes, name)
  }

  forEach(callback) {
    Object.entries(this.attributes).forEach(entry => callback.call(this, { name: entry[0], value: entry[1] }))
  }

  valueFilter(callback) {
    return Object.entries(this.attributes)
      .filter(entry => callback.call(this, entry[1]))
      .map(entry => ({ name: entry[0], value: entry[1] }))
  }

  addHistory(index, interceptor, result) {
    const interceptorName = requireProperty(interceptor, 'name')
    this.history.push({
      index,
      interceptorName,
      timestamp: new Date().toJSON(),
      result: { name: interceptorName, value: result },
    })
  }

  error(cause) {
    const error = new Error(cause.message)
    error.name = 'InterceptorContextError'
    error.cause = cause
    error.context = this
    return error
  }

  isSuspend() {
    if (this.suspend) {
      console.log(`${this.type}(${this.getUrl()}) intercept suspended`, this)
    }
    return this.suspend
  }
}

function discoverConfig(attributes) {
  try {
    if (typeof attributes['response'] === 'object') {
      return requireProperty(attributes['response'], 'config')
    }
    if (typeof attributes['error'] === 'object') {
      if (attributes['error']['config']) {
        return attributes['error']['config']
      }
      if (typeof attributes['error']['context'] === 'object') {
        return requireProperty(attributes['error']['context'], 'config')
      }
    }
  } catch (e) {
    const error = new Error('could not found axios request config object')
    error.cause = e
    throw error
  }
}

function findProperty(object, name) {
  if (typeof object !== 'object') {
    throw new TypeError(`target object is ${object}`)
  }
  if (typeof name !== 'string') {
    throw new TypeError(`target name is ${name}`)
  }
  return object[name]
}

function requireProperty(object, name) {
  const value = findProperty(object, name)
  if (value) {
    return value
  } else {
    throw new Error(`could not found property by name: ${name}`)
  }
}
