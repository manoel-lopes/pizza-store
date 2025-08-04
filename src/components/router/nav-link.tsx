import { Link, type LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  const isCurrentRoute = pathname === props.to
  return (
    <Link
      {...props}
      data-current={isCurrentRoute}
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground',
        props.className,
      )}
    />
  )
}
