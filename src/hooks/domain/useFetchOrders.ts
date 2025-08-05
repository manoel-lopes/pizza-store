import { useQuery } from '@tanstack/react-query'

import type { Order } from '@/core/domain/order'
import { useHttpClient } from '@/providers/http-client-provider'

export function useFetchOrders() {
  const { api } = useHttpClient()
  return useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: async () => {
      const response = await api.get<Order[]>('/orders')
      return response
    },
  })
}
