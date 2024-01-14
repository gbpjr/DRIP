import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

// colors
const black: string = '#312D29'
const white: string = '#ffffff'

const MainTheme = createTheme({
  shadows: Array(25).fill('rgba(149, 157, 165, 0.2) 0px 8px 24px') as Shadows,
  palette: {
    primary: {
      main: `${black}`,
      dark: `#554D46`,
      light: '#FEAC28',
      contrastText: `${white}`
    },
    secondary: {
      main: '#FFFFFF',
      dark: `${black}`,
      light: '#526A82',
      contrastText: `${black}`
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      fontSize: '80px',
      fontWeight: '400',
      color: `${white}`,
      letterSpacing: '1px',
    },
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
        styleOverrides: {
            root: {
                wordWrap: "break-word"
            },
        },
  }},
})

export { MainTheme }