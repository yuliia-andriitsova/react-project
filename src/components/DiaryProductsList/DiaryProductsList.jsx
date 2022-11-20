import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsData } from 'redux/Product-search/product-search-operations';
import {
  selectDayID,
  selectEatenProducts,
} from 'redux/Product-search/product-search-selectors';
import scss from './DiaryProductsList.module.scss';
export default function DiaryProductsList() {
  const eatenProducts = useSelector(selectEatenProducts);
  const dayId = useSelector(selectDayID);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteProductsData({ dayId, eatenProductId: id }));
  };

  return (
    <div className={scss.container}>
      {eatenProducts.map(eatenProduct => (
        <ul className={scss.list} key={eatenProduct.id}>
          <li className={scss.item}>{eatenProduct.title}</li>
          <li className={scss.item}>{eatenProduct.weight} g</li>
          <li className={scss.item}>{Math.round(eatenProduct.kcal)} kcal</li>
          <button
            className={scss.button}
            type="button"
            onClick={() => handleDelete(eatenProduct.id)}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L13 13" stroke="#9B9FAA" strokeWidth="2" />
              <path d="M1 13L13 0.999999" stroke="#9B9FAA" strokeWidth="2" />
            </svg>
          </button>
        </ul>
      ))}
    </div>
  );
}
