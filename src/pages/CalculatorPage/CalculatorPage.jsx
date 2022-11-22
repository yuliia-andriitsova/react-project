import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchDailyRatePrivate } from 'redux/Daily-rate/daily-rate-operations';
import { fetchDaySummary } from 'redux/Day/day-operations';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import scss from './CalculatorPage.module.scss';

export default function CalculatorPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchDaySummary({ date: moment(new Date()).format('YYYY-MM-DD') })
    );
  }, [dispatch]);

  const handleSubmit = data => {
    dispatch(fetchDailyRatePrivate(data));
  };

  return (
    <div className={scss.calculatorPage}>
      <section className={scss.containerPrivate}>
        <DailyCaloriesForm onSubmit={handleSubmit} />
      </section>
      <section>
        <RightSideBar />
      </section>
    </div>
  );
}
