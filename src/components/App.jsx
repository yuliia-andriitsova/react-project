import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import DairyPage from 'pages/DiarePage/DiarePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUserOperation } from 'redux/User/user-operation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOperation());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dairy" element={<DairyPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Route>
      </Routes>
    </>
  );
};
