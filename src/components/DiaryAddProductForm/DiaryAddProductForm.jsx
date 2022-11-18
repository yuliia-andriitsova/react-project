import Calendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import { ProductSelect } from 'components/ProductSelect/ProductSelect';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductsData } from 'redux/Product-search/product-search-operations';
import { fetchDaySummary } from 'redux/Day/day-operations';
import moment from 'moment';

export const DiaryAddProductForm = () => {
  const [productId, setProductId] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDaySummary({ date: moment(startDate).format('YYYY-MM-DD') }));
  }, [dispatch, startDate]);

  const handleChangeWeight = event => {
    const { value } = event.target;
    setProductWeight(value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      setProductsData({
        date: moment(startDate).format('YYYY-MM-DD'),
        productId,
        weight: productWeight,
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
        <ProductSelect onSelect={setProductId} />
        <input
          type="number"
          placeholder="weight"
          value={productWeight ?? ''}
          onChange={handleChangeWeight}
        />
        <button type="submit">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.72 7.96003H7.96003V13.72H6.04003V7.96003H0.280029V6.04003H6.04003V0.280029H7.96003V6.04003H13.72V7.96003Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </>
  );
};
