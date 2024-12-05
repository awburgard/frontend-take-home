import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor='violet'
      grayColor='slate'
      panelBackground='solid'
      scaling='100%'
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Theme>
  </StrictMode>
)
