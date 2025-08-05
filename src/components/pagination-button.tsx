import { Button } from './ui/button'

type PaginationButtonProps = {
  label: string
  onClick?: () => void
  children: React.ReactNode
}

export function PaginationButton({ label, onClick, children }: PaginationButtonProps) {
  return (
    <Button
      variant='outline'
      size='sm' className='w-8 h-8 p-0'
      onClick={onClick}
    >
      {children}
      <span className='sr-only'>{label}</span>
    </Button>
  )
}
