import type { Order } from '@/core/domain/oder'
import { Pagination } from '@/components/pagination'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { OrdersTableRow } from './orders-table-row'

type OrdersTableProps = {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[64px]' />
            <TableHead className='w-[140px]'>Order ID</TableHead>
            <TableHead className='w-[180px]'>Order made</TableHead>
            <TableHead className='w-[140px]'>Status</TableHead>
            <TableHead className='w-[140px]'>Client</TableHead>
            <TableHead className='w-[140px]'>Total</TableHead>
            <TableHead className='w-[164px]' />
            <TableHead className='w-[90px]' />
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <OrdersTableRow
              key={order.id}
              order={order}
            />
          ))}
        </TableBody>
      </Table>
      <Pagination
        totalItems={orders.length}
        pageIndex={0}
        perPage={10}
      />
    </div>
  )
}
