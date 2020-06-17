import Qs from 'qs'

export default params => Qs.stringify(params, { allowDots: true, indices: false })
