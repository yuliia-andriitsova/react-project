import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductsData } from 'redux/Daily-rate/daile-rate-operations';
import css from './DairyAddProductForm.module.css';

export default function DairyAddProductForm() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  //   const products = useSelector(state => state.products.items);

  const handleAddProduct = e => {
    e.preventDefault();
    dispatch(setProductsData({ product, grams }));
    setProduct('');
    setGrams('');
  };

  const onChangeProduct = event => {
    setProduct(event.target.value);
  };
  const onChangeGrams = event => {
    setGrams(event.target.value);
  };
  return (
    <form onSubmit={handleAddProduct} className={css.form}>
      <label className={css.label}>
        <input
          className={css.productInput}
          required
          placeholder="Enter product name"
          onChange={onChangeProduct}
          name="product"
          value={product}
          type="text"
        />
      </label>
      <label className={css.label}>
        <input
          className={css.gramsInput}
          placeholder="Grams"
          required
          onChange={onChangeGrams}
          name="grams"
          value={grams}
          type="number"
        />
      </label>
      <button type="submit" className={css.btn}>
        +
      </button>
    </form>
  );
}
