import DairyPage from 'pages/DiarePage/DiarePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshOperation } from 'redux/Auth/auth-operations';
import RightSideBar from './RightSideBar/RightSideBar';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshOperation());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dairy" element={<DairyPage />} />
      </Routes>
      <RightSideBar />
    </>
  );
};
