import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import scss from './RightSideBar.module.scss';
import { selectDaySummary } from 'redux/Product-search/product-search-selectors';
import { selectnotAllowedProducts } from 'redux/User/user-selectors';

export default function RightSideBar() {
  const daySummary = useSelector(selectDaySummary);
  const notAllowedProducts = useSelector(selectnotAllowedProducts);

  return (
    <div className={scss.container}>
      <div className={scss.rightSideBarWrap}>
        <h3 className={scss.rightSideBarTitle}>
          Summary for {moment(daySummary.date).format('DD/MM/YYYY')}
        </h3>
        <ul className={scss.rightSideBarList}>
          <li className={scss.rightSideBarItem}>
            <span className={scss.itemText}>Left</span>
            <span className={scss.itemText}>
              {Math.round(daySummary.kcalLeft)} kcal
            </span>
          </li>
          <li className={scss.rightSideBarItem}>
            <span className={scss.itemText}>Consumed</span>
            <span className={scss.itemText}>
              {daySummary.kcalConsumed} kcal
            </span>
          </li>
          <li className={scss.rightSideBarItem}>
            <span className={scss.itemText}>Daily rate</span>
            <span className={scss.itemText}>
              {' '}
              {Math.round(daySummary.dailyRate)} kcal
            </span>
          </li>
          <li className={scss.rightSideBarItem}>
            <span className={scss.itemText}>n% of normal</span>
            <span className={scss.itemText}>
              {Math.round(daySummary.percentsOfDailyRate)} kcal
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={scss.rightSideBarTitle}>Food not recommended</h3>
        <span className={scss.itemText}>Your diet will be displayed here</span>
        <ul className={scss.notAllowedProductsList}>
          {notAllowedProducts.slice(0, 10).map(product => (
            <li className={scss.itemText} key={product}>
              {product},
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
