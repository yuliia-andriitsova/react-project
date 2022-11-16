// import { useDispatch, useSelector } from 'react-redux';
// import { deleteProductsData } from 'redux/Product-search/product-search-operations';
// import { getProductsArr } from 'redux/Product-search/product-search-selectors';

// export const DailyProductsList = () => {
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
// };
