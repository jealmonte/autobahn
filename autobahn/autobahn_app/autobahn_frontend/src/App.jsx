import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Header from './assets/Header';
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
      main: '#f5f5f5',
      dark: '#212121',
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
