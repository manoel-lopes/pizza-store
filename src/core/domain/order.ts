import type { User } from './user'

export type OrderStatus = 'pending' | 'processing' | 'delivering' | 'delivered' | 'cancelled'

export type Order = {
  id: number
  createdAt: string
  status: OrderStatus
  client: User
  total: number
}
