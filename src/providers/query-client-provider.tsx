import {
  MutationCache,
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query'

type QueryClientProviderProps = {
  children: React.ReactNode
}

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  const queryClient = new QueryClient({
    mutationCache: new MutationCache({
      onSuccess: () => {
        queryClient.invalidateQueries()
      },
    }),
  })
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  )
}
