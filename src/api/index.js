import axios from 'axios'
import { baseURL } from './api-environment'
import paramsSerializer from './params-serializer'
import interceptors from './interceptors'

const minimalApi = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
  paramsSerializer,
  maxRedirects: 0,
})


export default minimalApi
window.minimalApi = minimalApi
