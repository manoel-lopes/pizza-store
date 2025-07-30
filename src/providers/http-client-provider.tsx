import { createContext, useContext } from 'react'
import type { HttpClient } from '@/core/infra/http/http-client'
import { useAxios } from '@/hooks/presentation/useAxios'

type HttpClientProviderProps = {
  children: React.ReactNode
}

type UseHttpClientResult = {
  api: HttpClient
}

const HttpClientContext = createContext<UseHttpClientResult>(
  {} as UseHttpClientResult,
)

export const HttpClientProvider = ({ children }: HttpClientProviderProps) => {
  const { api } = useAxios()
  return (
    <HttpClientContext.Provider value={{ api }}>
      {children}
    </HttpClientContext.Provider>
  )
}

export const useHttpClient = () => {
  const context = useContext(HttpClientContext)
  return context
}
