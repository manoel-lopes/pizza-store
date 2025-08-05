import type { Order } from '@/core/domain/order'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { calculateTimeInMinutes } from '@/util/date/calculate-time-in-minutes'
import { maskPhoneNumber } from '@/util/mask/phone'
import { OrderStatusBadge } from './order-status-badge'

type OrderDetailsDialogProps = {
  order: Order
}

export function OrderDetailsDialog({ order }: OrderDetailsDialogProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: {order.id}</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>
      <div className='space-y-6'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='text-muted-foreground'>Status</TableCell>
              <TableCell className='flex justify-end'>
                <OrderStatusBadge status={order.status} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Client</TableCell>
              <TableCell className='flex justify-end'>
                {order.client.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Phone</TableCell>
              <TableCell className='flex justify-end'>
                {maskPhoneNumber(order.client.phone)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Email</TableCell>
              <TableCell className='flex justify-end'>
                {order.client.email}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Order made</TableCell>
              <TableCell className='flex justify-end'>
                {calculateTimeInMinutes(order.createdAt)} min ago
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Total</TableCell>
              <TableCell className='flex justify-end'>
                {`$${order.total}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
