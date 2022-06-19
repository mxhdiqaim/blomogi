import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './themes/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { appRoutes, AppRouteType } from './routes';
import { Navbar, Footer } from './components';

import './App.css';

const renderRoute = (route: AppRouteType, index: number): JSX.Element => (
  <Route key={index} path={route.to} element={<route.element />} />
);

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Routes>{appRoutes.map((route, index) => renderRoute(route, index))}</Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
