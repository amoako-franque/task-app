import { ThemeOptions, createTheme } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(168,85,247,.80)',
      main: 'rgba(168,85,247,.65)',
      dark: 'rgba(168,85,247,.28)',
    },
    background: {
      // 'rgba(168,85,247,.28)'
      // '#810293'
      paper: 'rgba(168,85,247,.28)',
      default: 'rgba(0,0,0,.96)',
    },
  },
});
