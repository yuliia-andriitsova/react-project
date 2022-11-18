import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import css from './RightSideBar.module.css';
import { selectDaySummary } from 'redux/Product-search/product-search-selectors';

export default function RightSideBar() {
  const daySummary = useSelector(selectDaySummary);

  return (
    <div>
      <h3>Summary for {moment(daySummary.date).format('DD/MM/YYYY')}</h3>
      <table>
        <tbody className={css.RightSideBarTable}>
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
      <h3 className={css.RightSideBarTitle}>Food not recommended</h3>
      <span className={css.RightSideBarText}>
        Your diet will be displayed here
      </span>
      {/* <ol className={css.ModalListNotEat}>
        {notAllowedProducts.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ol> */}
    </div>
  );
}
