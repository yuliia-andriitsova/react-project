import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsData } from 'redux/Daily-rate/daile-rate-operations';
import { getProductsArr } from 'redux/Daily-rate/daily-rate-selectors';

export const DailyProductsList = () => {
  const products = useSelector(getProductsArr);
  const dispatch = useDispatch();

  const handleDeleteProduct = id => {
    dispatch(deleteProductsData(id));
  };

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <p>{product.categories}</p>
          <p>{product.weight}</p>
          <p>{product.calories}</p>
          <button onClick={() => handleDeleteProduct(product.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
