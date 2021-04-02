import axios, { AxiosRequestConfig } from 'axios'

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://freestyle.getsandbox.com',
}

const instance = createInstance(axiosRequestConfig)

function createInstance(config?: AxiosRequestConfig) {
  return axios.create(config)
}

export default instance
