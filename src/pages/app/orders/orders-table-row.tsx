import type { Order } from '@/core/domain/order'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { calculateTimeInMinutes } from '@/util/date/calculate-time-in-minutes'
import { OrderDetailsDialog } from './order-details-dialog'
import { OrderStatusBadge } from './order-status-badge'

type OrdersTableRowProps = {
  order: Order
}

export function OrdersTableRow({ order }: OrdersTableRowProps) {
  return (
    <TableRow key={order.id}>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' size='xs'>
              <Icons.Search className='h-3 w-3' />
              <span className='sr-only'>Details of the order</span>
            </Button>
          </DialogTrigger>
          <OrderDetailsDialog order={order} />
        </Dialog>
      </TableCell>
      <TableCell className='relative pl-7 font-mono text-sm font-medium'>
        <span className='absolute flex items-center justify-center'>
          {order.id}
        </span>
      </TableCell>
      <TableCell className='text-muted-foreground'>
        {calculateTimeInMinutes(order.createdAt)} min ago
      </TableCell>
      <TableCell>
        <OrderStatusBadge status={order.status} />
      </TableCell>
      <TableCell className='font-medium'>{order.client.name}</TableCell>
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
