import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header/Header';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchDailyRatePrivate } from 'redux/Daily-rate/daily-rate-operations';
import { fetchDaySummary } from 'redux/Day/day-operations';

export default function CalculatorPage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

  const handleSubmit = data => {
    dispatch(fetchDailyRatePrivate(data));
    dispatch(fetchDaySummary({ date }));
  };

  return (
    <>
      <Header />
      <DailyCaloriesForm onSubmit={handleSubmit} />
    </>
  );
}
