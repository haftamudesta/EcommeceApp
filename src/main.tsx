import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/app/styles/index.scss"
import App from '@/app/App.tsx'
import { BrowserRouter } from "react-router-dom";
import { StoreProvider, ThemeProvider } from '@/app/providers';
import "@/shared/config/i18n/i18n"
import { ErrorBoundary } from '@/app/providers';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
    <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
    </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)
