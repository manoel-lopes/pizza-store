import { Helmet } from 'react-helmet-async'

import { OrderTableFilters } from './order-table-filters'
import { OrdersTable } from './orders-table'

export function Orders() {
  const dateFifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString()
  const orders = Array.from({ length: 105 }).map((_, index) => ({
    id: index + 1,
    order: `Order ${index + 1}`,
    createdAt: dateFifteenMinutesAgo,
    status: 'pending' as const,
    client: 'John Doe',
    total: 149.9,
  }))
  return (
    <>
      <Helmet title='orders' />
      <div className='flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Orders</h1>
        <div className='space-y-2.5'>
          <OrderTableFilters />
          <OrdersTable orders={orders} />
        </div>
      </div>
    </>
  )
}
