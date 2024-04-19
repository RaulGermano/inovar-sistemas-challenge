import { queryClient } from '@/lib/react-query'
import { ResearcherContextProvider } from '@contexts/ResearcherContext'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import '@styles/global.css'
import theme from '@styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ResearcherContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </ResearcherContextProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default MyApp
