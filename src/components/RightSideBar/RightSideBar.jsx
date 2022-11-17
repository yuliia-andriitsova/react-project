import React from 'react';
import { useSelector } from 'react-redux';
import { selectDailyRate } from 'redux/Daily-rate/daily-rate-selectors';

export default function RightSideBar() {
  const dailyRate = useSelector(selectDailyRate);

  return (
    <div>
      <h3>Summary for 06/20/2020 'date'</h3>
      <table>
        <tbody>
          <tr>
            <td>Left</td>
            <td>000 'kcalLeft' kcal</td>
          </tr>
          <tr>
            <td>Consumed</td>
            <td>000 'kcalConsumed' kcal</td>
          </tr>
          <tr>
            <td>Daily rate</td>
            <td> {dailyRate} kcal</td>
          </tr>
          <tr>
            <td>n% of normal</td>
            <td>000 'percentsOfDailyRate' kcal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
