import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDailyRate } from 'redux/Daily-rate/daily-rate-operations';
import scss from './MainPage.module.scss';

export default function MainPage() {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(fetchDailyRate(data));
    setModalState(true);
  };

  return (
    <div className={scss.container}>
      <Header />
      <DailyCaloriesForm onSubmit={handleSubmit} />
      {modalState && <Modal onClose={() => setModalState(false)} />}
    </div>
  );
}
