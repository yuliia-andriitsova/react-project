import axios from 'axios';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { useEffect, useMemo, useState, useRef } from 'react';
import scss from './ProductSelect.module.scss';

export const ProductSelect = ({ onSelect, productValue, setProductValue }) => {
  const ref = useRef(null);
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handler = event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setProducts([]);
      }
    };
    if (products.length) {
      document.addEventListener('keydown', handler);
    }
    return () => document.removeEventListener('keydown', handler);
  }, [setProducts, products.length]);

  useEffect(() => {
    const handler = event => {
      const isInnerClick = ref.current && ref.current.contains(event.target);
      if (!isInnerClick) {
        setProducts([]);
      }
    };
    if (products.length) {
      setTimeout(() => {
        document.addEventListener('click', handler);
      }, 200);
    }
    return () => document.removeEventListener('click', handler);
  }, [setProducts, products.length]);

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
    setProducts([]);
    onSelect();
  };

  const handleSelectProduct = product => {
    setProductValue(product.title.ua);
    setProducts([]);
    onSelect(product._id);
  };

  return (
    <div className={scss.root}>
      <input
        className={scss.product}
        type="text"
        placeholder="Enter product name "
        value={productValue ?? ''}
        onChange={handleChangeProduct}
      />
      <div className={scss.select} ref={ref}>
        {isLoading && <Loader />}
        {products &&
          products.map(product => (
            <button
              key={product._id}
              type="button"
              style={{ display: 'block' }}
              onClick={() => handleSelectProduct(product)}
              className={scss.productButton}
            >
              {product.title.ua}
            </button>
          ))}
      </div>
    </div>
  );
};

ProductSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
