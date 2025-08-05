import axios from 'axios'

import type { HttpClient } from '@/core/infra/http/http-client'
import type { UseHttpClientResult } from '@/providers/http-client-provider'
import { env } from '@/lib/env'

export function useAxios(): UseHttpClientResult {
  const axiosInstance = axios.create({
    baseURL: env.API_URL,
  })
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
