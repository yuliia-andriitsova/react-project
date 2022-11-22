import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

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
    localStorage.setItem('userData', JSON.stringify(data));
  };

  return (
    <section className={scss.container}>
      <DailyCaloriesForm onSubmit={handleSubmit} />
      {modalState && <Modal onClose={() => setModalState(false)} />}
    </section>
  );
}
