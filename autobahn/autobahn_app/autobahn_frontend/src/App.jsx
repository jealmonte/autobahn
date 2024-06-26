import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import './App.css'
import AboutPage from './assets/AboutPage';
import Home from './assets/Home';
import SellForm from './assets/SellForm';
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
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/SellForm" element={<SellForm />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
