export type OrderStatus = 'pending' | 'approved' | 'cancelled'

export type Order = {
  id: number
  createdAt: string
  status: OrderStatus
  client: string
  total: number
}
