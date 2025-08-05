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
import { OrderStatusBadge } from './order-status-badge'

type OrderDetailsDialogProps = {
  order: Order
}

export function OrderDetailsDialog({ order }: OrderDetailsDialogProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order {order.id}</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>
      <div className='space-y-6'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <OrderStatusBadge status={order.status} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
