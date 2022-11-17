import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header/Header';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDailyRatePrivate } from 'redux/Daily-rate/daily-rate-operations';

export default function CalculatorPage() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(fetchDailyRatePrivate(data));
  };

  return (
    <>
      <Header />
      <DailyCaloriesForm onSubmit={handleSubmit} />
    </>
  );
}
