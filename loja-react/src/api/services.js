import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sua-api.com'
})

export const getServices = () => api.get('/services')
export const getServiceById = (id) => api.get(`/services/${id}`)
