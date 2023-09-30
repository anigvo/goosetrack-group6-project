import { ThemeProvider } from "@emotion/react";
import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "utils/GlobalStyle";
import { darkTheme, lightTheme } from "utils/colors";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/selectors";
import MainLayout from "layout/MainLayout/MainLayout";
import MainPage from "pages/MainPage/MainPage";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import NotFound from "pages/NotFound/NotFound";

const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/StatisticsPage'));
const ChoosedDay = lazy(() => import('../layout/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('../layout/ChoosedMonth/ChoosedMonth'));

export const App = () => {
  const [pageName, setPageName] = useState(null);
  const isLoggedIn = false;
  const theme = useSelector(selectTheme);

  const updatePageName = name => {
    setPageName(name);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/">
          <Route
            path="/"
            element={
              !isLoggedIn ? <MainPage /> : <MainLayout pageName={pageName} />
            }
          >
            <Route
              path="calendar"
              element={<CalendarPage updatePageName={updatePageName} />}
            >
              <Route path="month/:currentDate" element={<ChoosedMonth />} />
              <Route path="day/:currentDay" element={<ChoosedDay />} />
            </Route>
            <Route
              path="account"
              element={<AccountPage updatePageName={updatePageName} />}
            />
            <Route
              path="statistics"
              element={<StatisticsPage updatePageName={updatePageName} />}
            />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
};
