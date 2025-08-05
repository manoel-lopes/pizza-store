import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderTableFilters() {
  return (
    <form className='flex items-center gap-2'>
      <span className='text-sm font-semibold'>Filters:</span>
      <Input
        type='text'
        placeholder='Order ID'
        className='h-8 w-[320px]'
      />
      <Input
        type='text'
        placeholder='Client'
        className='h-8 w-auto'
      />
      <Select defaultValue='all'>
        <SelectTrigger className='h-8 w-[180px]'>
          <SelectValue placeholder='Status' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All statuses</SelectItem>
          <SelectItem value='pending'>Pending</SelectItem>
          <SelectItem value='cancelled'>Cancelled</SelectItem>
          <SelectItem value='processing'>Processing</SelectItem>
          <SelectItem value='delivering'>Delivering</SelectItem>
          <SelectItem value='delivered'>Delivered</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type='submit'
        variant='secondary'
        size='md'
      >
        <Icons.Search className='h-4 w-4 mr-2' />
        Filter orders
      </Button>
      <Button
        type='button'
        variant='outline'
        size='md'
      >
        <Icons.X className='h-4 w-4' />
        Clear filters
      </Button>
    </form>
  )
}
