import type { Order } from '@/core/domain/oder'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { calculateTimeInMinutes } from '@/util/date/calculate-time-in-minutes'
import { OrderStatusBadge } from './order-status-badge'

type OrdersTableRowProps = {
  order: Order
}

export function OrdersTableRow({ order }: OrdersTableRowProps) {
  return (
    <TableRow key={order.id}>
      <TableCell>
        <Button variant='outline' size='xs'>
          <Icons.Search className='h-3 w-3' />
          <span className='sr-only'>Details of the order</span>
        </Button>
      </TableCell>
      <TableCell className='font-mono text-sm font-medium'>{order.id}</TableCell>
      <TableCell className='text-muted-foreground'>
        {calculateTimeInMinutes(order.createdAt)} min ago
      </TableCell>
      <TableCell>
        <OrderStatusBadge status={order.status} />
      </TableCell>
      <TableCell className='font-medium'>{order.client}</TableCell>
      <TableCell className='font-medium'>${order.total}</TableCell>
      <TableCell>
        <Button variant='ghost' size='xs'>
          <Icons.ArrowRight className='h-3 w-3 mr2' />
          Approve
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='ghost' size='xs'>
          <Icons.X className='h-3 w-3 mr2' />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
