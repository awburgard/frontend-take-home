import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

import '@radix-ui/themes/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { FilterProvider } from './context/FilterContext/FilterContext.tsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'
import { AppSkeleton } from './components/AppSkeleton/AppSkeleton.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor='violet'
      grayColor='slate'
      panelBackground='solid'
      scaling='100%'
    >
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <Suspense fallback={<AppSkeleton />}>
            <ErrorBoundary fallback={<div>Something went wrong.</div>}>
              <App />
            </ErrorBoundary>
          </Suspense>
          <ToastContainer />
        </FilterProvider>
      </QueryClientProvider>
    </Theme>
  </StrictMode>
)
