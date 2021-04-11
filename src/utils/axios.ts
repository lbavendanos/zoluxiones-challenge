import axios, { AxiosRequestConfig } from 'axios'

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me',
}

const instance = createInstance(axiosRequestConfig)

function createInstance(config?: AxiosRequestConfig) {
  return axios.create(config)
}

export default instance
