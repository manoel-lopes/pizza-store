import axios from 'axios'
import type { HttpClient } from '@/core/infra/http/http-client'

export function useAxios() {
  const axiosInstance = axios.create()
  const api = {} as HttpClient

  api.get = async <T>(url: string, params?: string): Promise<T> => {
    const response = await axiosInstance.get(`${url}${params || ''}`)
    return response.data
  }

  api.post = async <T, Q = void>(url: string, body?: T): Promise<Q> => {
    const response = await axiosInstance.post(url, body)
    return response.data
  }

  api.put = async <T>(url: string, body: unknown): Promise<T> => {
    const response = await axiosInstance.put(url, body)
    return response.data
  }

  api.patch = async <T>(url: string, body: unknown): Promise<T> => {
    const response = await axiosInstance.patch(url, body)
    return response.data
  }

  api.delete = async <T>(url: string, data?: T): Promise<void> => {
    const response = await axiosInstance.delete(url, { data })
    return response.data
  }

  return { api }
}
