import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsData } from 'redux/Product-search/product-search-operations';
import {
  selectDayID,
  selectEatenProducts,
} from 'redux/Product-search/product-search-selectors';

export default function DiaryProductsList() {
  const eatenProducts = useSelector(selectEatenProducts);
  const dayId = useSelector(selectDayID);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteProductsData({ dayId, eatenProductId: id }));
  };

  return (
    <ul>
      {eatenProducts.map(eatenProduct => (
        <li key={eatenProduct.id}>
          <span>{eatenProduct.title}</span>
          <span>{eatenProduct.weight} g</span>
          <span>{Math.round(eatenProduct.kcal)} kcal</span>
          <button type="button" onClick={() => handleDelete(eatenProduct.id)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L13 13" stroke="#9B9FAA" strokeWidth="2" />
              <path d="M1 13L13 0.999999" stroke="#9B9FAA" strokeWidth="2" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
