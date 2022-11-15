import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Modal from './Modal/Modal';

export const App = () => {
  return (
    <>
      <Modal />

      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
};
