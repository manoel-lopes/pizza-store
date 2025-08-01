import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { HttpClientProvider } from './providers/http-client-provider'
import { QueryClientProvider } from './providers/query-client-provider'
import { router } from './routes/router'

export function App() {
  return (
    <HttpClientProvider>
      <QueryClientProvider>
        <HelmetProvider>
          <Helmet titleTemplate='%s | pizza.store' />
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </HttpClientProvider>
  )
}
