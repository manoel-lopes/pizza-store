import { Icons } from '@/components/icons'
import { RouteContent } from '@/components/router/route-content'

export function AuthLayout() {
  return (
    <div className='grid min-h-screen grid-cols-2 antialiased'>
      <div className='flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground'>
        <div className='flex items-center gap-3 text-lg text-foreground'>
          <Icons.Pizza className='h-5 w-5' />
          <span className='font-semibold'>pizza.store</span>
        </div>
        <footer className='text-sm'>
          Partners dashboard &copy; pizza.store - {new Date().getFullYear()}.
        </footer>
      </div>
      <div className='flex flex-col items-center justify-center relative'>
        <RouteContent />
      </div>
    </div>
  )
}
