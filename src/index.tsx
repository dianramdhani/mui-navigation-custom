import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { StyledEngineProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Demo from './Demo'

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
})

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Demo />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
