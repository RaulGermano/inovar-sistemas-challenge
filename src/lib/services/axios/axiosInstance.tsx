import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://run.mocky.io/v3/', // TODO: Have to add in an .env file
  timeout: 5000,
})

export default axiosInstance
