import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { HttpClientProvider } from './providers/http-client-provider'
import { QueryClientProvider } from './providers/query-client-provider'
import { ThemeProvider } from './providers/theme-provider'
import { router } from './router'

export function App() {
  return (
    <HttpClientProvider>
      <QueryClientProvider>
        <HelmetProvider>
          <ThemeProvider
            storageKey='pizza-store-theme'
            defaultTheme='system'
          >
            <Helmet titleTemplate='%s | pizza.store' />
            <Toaster richColors />
            <RouterProvider router={router} />
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </HttpClientProvider>
  )
}
