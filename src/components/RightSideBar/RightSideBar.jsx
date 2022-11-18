import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDailyRate } from 'redux/Daily-rate/daily-rate-selectors';
import { selectDaySummary } from 'redux/Product-search/product-search-selectors';

export default function RightSideBar() {
  const dailyRate = useSelector(selectDailyRate);
  const daySummary = useSelector(selectDaySummary);

  return (
    <div>
      <h3>Summary for {moment(daySummary.date).format('DD/MM/YYYY')}</h3>
      <table>
        <tbody>
          <tr>
            <td>Left</td>
            <td>{daySummary.kcalLeft} kcal</td>
          </tr>
          <tr>
            <td>Consumed</td>
            <td>{daySummary.kcalConsumed} kcal</td>
          </tr>
          <tr>
            <td>Daily rate</td>
            <td> {daySummary.dailyRate} kcal</td>
          </tr>
          <tr>
            <td>n% of normal</td>
            <td>{daySummary.percentsOfDailyRate} kcal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
