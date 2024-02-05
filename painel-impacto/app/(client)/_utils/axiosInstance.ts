import axios from 'axios'
import LocalStorageManager from './storageManager'

export const axiosInstance = axios.create()

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  const session = LocalStorageManager.session
  const bearer = session && LocalStorageManager.bearer

  if (session && bearer) {
    config.headers.session = session
    config.headers.bearer = bearer
  }
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.baseURL = '/internal/'
  return config
})

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },

  async function (error) {
    if (
      error.response?.status === 401 &&
      error.response.config.url !== 'security/login'
    ) {
      LocalStorageManager.session = 0
      LocalStorageManager.bearer = ''
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)
