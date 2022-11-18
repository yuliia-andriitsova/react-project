import axios from 'axios';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { useMemo, useState } from 'react';

export const ProductSelect = ({ onSelect }) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [productValue, setProductValue] = useState('');

  const fetchProducts = useMemo(
    () =>
      debounce(search => {
        if (search.length < 1) {
          return;
        }

        setIsLoading(true);
        axios
          .get('/product', { params: { search } })
          .then(({ data }) => setProducts(data))
          .finally(() => {
            setIsLoading(false);
          });
      }, 500),
    []
  );

  const handleChangeProduct = event => {
    const { value } = event.target;
    setProductValue(value);
    fetchProducts(value.trim());
    if (value.trim().length < 1) {
      setProducts(null);
    }
  };

  const handleSelectProduct = product => {
    setProductValue(product.title.ua);
    setProducts(null);
    onSelect(product._id);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search product"
        value={productValue ?? ''}
        onChange={handleChangeProduct}
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

ProductSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
