import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import DairyPage from 'pages/DiarePage/DiarePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { getUserOperation } from 'redux/User/user-operation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import scss from './App.module.scss';
import Header from '../Header/Header';

export const App = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const isMainbackground =
    location.pathname === '/' ||
    location.pathname === '/signin' ||
    location.pathname === '/registration';
  useEffect(() => {
    dispatch(getUserOperation());
  }, [dispatch]);

  return (
    <div className={isMainbackground ? scss.backgraundImg : scss.secondaryBcg}>
      <Header />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>

        <Route
          path="/"
          element={<PrivateRoute />}
          className={scss.containerPrivate}
        >
          <Route path="/dairy" element={<DairyPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Route>
      </Routes>
    </div>
  );
};
