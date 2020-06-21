import redirect from './redirect'

export const handleClientError = context => {
  const error = context.getError()
  const { status } = error.response
  switch (status) {
    case 401:
      break
    case 403:
      break
    default:
  }
}