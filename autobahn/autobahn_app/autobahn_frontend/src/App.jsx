import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import './App.css'

function App() {

const theme = createTheme({
  palette: {
    primary: {
      light: '#757575',
      main: '#212121',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#757575',
      dark: '#212121',
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  )
}

export default App
