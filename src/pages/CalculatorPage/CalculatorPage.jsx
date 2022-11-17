import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
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
      <DailyCaloriesForm onSubmit={handleSubmit} />
    </>
  );
}
