import { Icons } from './icons'
import { NavLink } from './router/nav-link'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className='border-b'>
      <div className='flex h-16 items-center gap-6 px-6'>
        <Icons.Pizza className='h-6 w-6' />
        <Separator orientation='vertical' className='h-6' />
        <div className='flex items-center space-x-4 lg:space-x-6'>
          <NavLink to='/'>
            <Icons.Home className='h-4 w-4' />
            Home
          </NavLink>
          <NavLink to='/orders'>
            <Icons.UtensilsCrossed className='h-4 w-4' />
            Orders
          </NavLink>
        </div>
      </div>
    </header>
  )
}
