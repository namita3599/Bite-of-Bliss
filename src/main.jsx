import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Optional: create a cute pastel MUI theme
const theme = createTheme({
  palette: {
    background: {
      default: '#FFF5BA', // pastel yellow background
    },
    primary: {
      main: '#FF69B4', // pink accent color
    },
  },
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
