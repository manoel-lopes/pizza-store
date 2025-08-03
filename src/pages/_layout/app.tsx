import { RouteContent } from '@/components/router/route-content'

export function AppLayout() {
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        <RouteContent />
      </div>
    </div>
  )
}
