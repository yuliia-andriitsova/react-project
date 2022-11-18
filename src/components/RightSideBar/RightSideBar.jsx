import React from 'react';
import { useSelector } from 'react-redux';
// import { cssTransition } from 'react-toastify';
import {
  selectDailyRate,
  selectNotAllowedProducts,
} from 'redux/Daily-rate/daily-rate-selectors';
import css from './RightSideBar.module.css';

export default function RightSideBar() {
  const dailyRate = useSelector(selectDailyRate);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);

  return (
    <div className={css.RightSideBar}>
      <h3 className={css.RightSideBarTitle}>Summary for 06/20/2020 'date'</h3>
      <table>
        <tbody className={css.RightSideBarTable}>
          <tr>
            <td className={css.RightSideBarTableFirst}>Left</td>
            <td className={css.RightSideBarTableSecond}>000 'kcalLeft' kcal</td>
          </tr>
          <tr>
            <td className={css.RightSideBarTableFirst}>Consumed</td>
            <td className={css.RightSideBarTableSecond}>
              000 'kcalConsumed' kcal
            </td>
          </tr>
          <tr>
            <td className={css.RightSideBarTableFirst}>Daily rate</td>
            <td className={css.RightSideBarTableSecond}> {dailyRate} kcal</td>
          </tr>
          <tr>
            <td className={css.RightSideBarTableFirst}>n% of normal</td>
            <td className={css.RightSideBarTableSecond}>
              000 'percentsOfDailyRate' kcal
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className={css.RightSideBarTitle}>Food not recommended</h3>
      <span className={css.RightSideBarText}>
        Your diet will be displayed here
      </span>
      <ol className={css.ModalListNotEat}>
        {notAllowedProducts.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ol>
    </div>
  );
}
