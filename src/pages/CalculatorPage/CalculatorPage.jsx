import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header/Header';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchDailyRatePrivate } from 'redux/Daily-rate/daily-rate-operations';
import { fetchDaySummary } from 'redux/Day/day-operations';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import scss from './CalculatorPage.module.scss';

export default function CalculatorPage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

  const handleSubmit = data => {
    dispatch(fetchDailyRatePrivate(data));
  };

  return (
    <div className={scss.containerPrivate}>
      <Header />
      <DailyCaloriesForm onSubmit={handleSubmit} />
      <RightSideBar />
    </div>
  );
}
