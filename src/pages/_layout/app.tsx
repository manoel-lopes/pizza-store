import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
