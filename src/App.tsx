import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as colors from '@mui/material/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'© '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="https://github.com/symysak">
        symysak
      </Link>
      {'.'}
    </Typography>
  );
}


function App() {
  const [darkMode, setDarkMode] = React.useState(Boolean);

  const clientIsDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  React.useEffect(() => {
    setDarkMode(clientIsDarkMode);
  }, []);

  const darkModeOn = () => {
    setDarkMode(true);
  };
  const darkModeOff = () => {
    setDarkMode(false);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode
      ? {
          // is dark mode
          background: {
            default: colors.grey[900],
            paper: colors.grey[800],
          },
        }
      : {
          // is light mode
          
        }),
    },
    typography: {
      button: {
          textTransform: "none"
      }
    },
  });

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Traffic Monitor
        </Typography>

        {/*右寄せ*/}
        <div style={{ flexGrow: 1 }} />
        {darkMode ? (
          <IconButton color="inherit" onClick={darkModeOff}>
            <Brightness7Icon />
          </IconButton>
        ) : (
          <IconButton color="inherit" onClick={darkModeOn}>
            <Brightness4Icon />
          </IconButton>
        )}

      </Toolbar>
    </AppBar>

    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <p>aa</p>
      </Paper>
      <Copyright />
    </Container>
  </ThemeProvider>
    </div>
  );
}

export default App;

