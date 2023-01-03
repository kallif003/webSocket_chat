import axios, { AxiosInstance } from 'axios'

const clientHttp: AxiosInstance = axios.create({
  baseURL: 'http://10.11.20.125:3001/'
})

export default clientHttp
