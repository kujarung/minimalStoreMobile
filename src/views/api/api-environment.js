const env = process.env.NODE_ENV

function interceptLog(context) {
  console.log(context.type, context.getUrl(), 'attributes', context.attributes, 'history', context.history)
}

const baseURLs = {
  debug: 'http://http://minimalstore.gabia.io/api',
}

const logInterceptors = {
  debug: interceptLog,
  development: (context) => {},
  production: (context) => {},
}

export const baseURL = baseURLs

export const logInterceptor = {
  name: 'logIntercept',
  intercept: logInterceptors[env],
}
