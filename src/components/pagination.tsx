import { Icons } from './icons'
import { PaginationButton } from './pagination-button'

type PaginationProps = {
  totalItems: number
  pageIndex: number
  perPage: number
}

export function Pagination({ totalItems, pageIndex, perPage }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / perPage) || ''
  return (
    <div className='flex items-center justify-between p-3'>
      <span className='text-sm text-muted-foreground'>
        Total of {totalItems} items
      </span>
      <div className='flex items-center gap-6 lg:gap-8'>
        <span className='text-sm text-muted-foreground'>
          Page {pageIndex + 1} of {totalPages}
        </span>
        <div className='flex items-center gap-2'>
          <PaginationButton label='First page'>
            <Icons.ChevronLeft />
          </PaginationButton>
          <PaginationButton label='Previous page'>
            <Icons.ChevronLeft />
          </PaginationButton>
          <PaginationButton label='Next page'>
            <Icons.ChevronRight />
          </PaginationButton>
          <PaginationButton label='Last page'>
            <Icons.ChevronRight />
          </PaginationButton>
        </div>
      </div>
    </div>
  )
}
