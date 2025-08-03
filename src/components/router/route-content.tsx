import { Outlet, type OutletProps } from 'react-router-dom'

type RouteContentProps = OutletProps

export const RouteContent = (props: RouteContentProps) => {
  return <Outlet {...props} />
}
