import axios from 'axios'
import { baseURL } from './api-environment'
import paramsSerializer from './params-serializer'
import interceptors from './interceptors'

const taxyApi = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
  paramsSerializer,
  maxRedirects: 0,
})

taxyApi.interceptors.request.use(interceptors.request.resolve, interceptors.request.reject)
taxyApi.interceptors.response.use(interceptors.response.resolve, interceptors.response.reject)

export default taxyApi
window.taxyApi = taxyApi
