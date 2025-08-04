import { Link, type LinkProps } from 'react-router-dom'

type NavLinkProps = LinkProps & {
  children: React.ReactNode
}

export const NavLink = (props: NavLinkProps) => {
  return <Link {...props} />
}
