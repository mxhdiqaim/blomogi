import { ThemeProvider } from '@emotion/react';
import { theme } from './themes/theme';
import './App.css';
import { CssBaseline } from '@mui/material';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <p>Blomogi</p>
      </div>
    </ThemeProvider>
  );
};

export default App;
