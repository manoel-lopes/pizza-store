import type { OrderStatus } from '@/core/domain/oder'

type OrderStatusBadgeProps = {
  status: OrderStatus
}

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const statusColor: Record<OrderStatus, string> = {
    pending: 'bg-yellow-500',
    approved: 'bg-green-500',
    cancelled: 'bg-red-500',
  }
  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1)
  return (
    <div className='flex items-center gap-2'>
      <span className={`h-2 w-2 rounded-full ${statusColor[status]}`} />
      <span>{formattedStatus}</span>
    </div>
  )
}
