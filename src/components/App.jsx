import { ThemeProvider } from '@emotion/react';
import { lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'utils/GlobalStyle';
import { darkTheme, lightTheme } from 'utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import MainLayout from 'layout/MainLayout/MainLayout';
import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import NotFound from 'pages/NotFound/NotFound';
import { useAuth } from 'hooks/useAuth';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from 'redux/auth/operations';

const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);
const ChoosedDay = lazy(() => import('../layout/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('../layout/ChoosedMonth/ChoosedMonth'));

export const App = () => {
  const [pageName, setPageName] = useState(null);
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const updatePageName = name => {
    setPageName(name);
  };

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {isRefreshing ? <p>Loading...</p> :
        (<Routes>
          <Route path='/'>
            <Route
              index
              element={<PublicRoute redirectTo='/calendar' component={<MainPage />} />} />
            <Route path="login" element={<PublicRoute redirectTo={'/'} component={<LoginPage />} />} />
            <Route path="register" element={<PublicRoute redirectTo={'/'} component={<RegisterPage />} />} />
            <Route path='/' element={<PrivateRoute redirectTo='/' component={<MainLayout pageName={pageName} />} />}>
              <Route path="calendar"
                element={<PrivateRoute redirectTo='/' component={<CalendarPage updatePageName={updatePageName} />} />}>
                <Route path="month/:currentDate" element={<PrivateRoute redirectTo='/' component={<ChoosedMonth />} />} />
                <Route path="day/:currentDay" element={<PrivateRoute redirectTo='/' component={<ChoosedDay />} />} />
              </Route>
              <Route
                path="account"
                element={<PrivateRoute redirectTo='/' component={<AccountPage updatePageName={updatePageName} />} />}
              />
              <Route
                path="statistics"
                element={<PrivateRoute redirectTo='/' component={<StatisticsPage updatePageName={updatePageName} />} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>)}
      <GlobalStyles />
      <Toaster />
    </ThemeProvider>
  );
};
