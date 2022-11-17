// import { useDispatch, useSelector } from 'react-redux';
// import { deleteProductsData } from 'redux/Product-search/product-search-operations';
// import { getProductsArr } from 'redux/Product-search/product-search-selectors';

import Loader from 'components/Loader/Loader';
import { debounce } from 'lodash';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from 'redux/Product-search/product-search-operations';
import { selectProducts } from 'redux/Product-search/product-search-selectors';

export const DailyProductsList = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  // const products = useSelector(selectProducts);

  // const fetchProducts = useMemo(
  //   () =>
  //     debounce(search => {
  //       if (search.length < 1) {
  //         return;
  //       }
  //       setIsLoading(true);
  //       setProducts(null);
  //     }, 500),
  //   []
  // );

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
    dispatch(getProductsData(value.trim()));
    setProducts();
    if (value.trim().length < 1) {
      setProducts(null);
    }
  };

  // const handleSelectProduct = product => {
  //   setValue(product.title.ua);
  //   setProducts(null);
  //   onSelect(product._id);
  // };

  return (
    <>
      <input
        type="text"
        placeholder="Search product"
        value={value ?? ''}
        onChange={handleChange}
      />
      {isLoading && <Loader />}
      {products &&
        products.map(product => (
          <button
            key={product._id}
            type="button"
            style={{ display: 'block' }}
            onClick={() => handleSelectProduct(product)}
          >
            {product.title.ua}
          </button>
        ))}
    </>
  );
};

//   const products = useSelector(getProductsArr);
//   const dispatch = useDispatch();
//   const handleDeleteProduct = id => {
//     dispatch(deleteProductsData(id));
//   };
//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           <p>{product.categories}</p>
//           <p>{product.weight}</p>
//           <p>{product.calories}</p>
//           <button onClick={() => handleDeleteProduct(product.id)} type="button">
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
