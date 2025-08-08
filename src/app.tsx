import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from './@config/lib/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Chá de casa nova - Rafael & Nicole" />
      <ThemeProvider
        defaultTheme="light"
        storageKey="cha-de-casa-nova-rafael-e-nicole"
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />

          <Toaster richColors position="bottom-left" />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
