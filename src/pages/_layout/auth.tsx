import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <div>
        <h1>Auth</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
