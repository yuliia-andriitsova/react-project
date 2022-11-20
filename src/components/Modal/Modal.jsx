import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  selectDailyRate,
  selectNotAllowedProducts,
} from 'redux/Daily-rate/daily-rate-selectors';
import scss from './Modal.module.scss';

const modalWindow = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  const dailyRate = useSelector(selectDailyRate);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleCloseModal = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={scss.Overlay} onClick={handleCloseModal}>
      <div className={scss.Modal}>
        <button type="button" className={scss.ModalCloseIcon} onClick={onClose}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8333 1.3415L10.6583 0.166504L5.99996 4.82484L1.34163 0.166504L0.166626 1.3415L4.82496 5.99984L0.166626 10.6582L1.34163 11.8332L5.99996 7.17484L10.6583 11.8332L11.8333 10.6582L7.17496 5.99984L11.8333 1.3415Z"
              fill="black"
            />
          </svg>
        </button>
        <h2 className={scss.ModalTitle}>
          Your recommended daily <br />
          calorie intake is
        </h2>
        <p className={scss.ModalLine}>
          <span className={scss.ModalNumberCalories}>{dailyRate}</span>
          <span className={scss.ModalCalories}> kcal</span>
        </p>
        <span></span>
        <h3 className={scss.ModalTitleSecond}>Foods you should not eat</h3>
        <ol className={scss.ModalListNotEat}>
          {notAllowedProducts.map(product => (
            <li key={product}>{product}</li>
          ))}
        </ol>
        <NavLink to="/registration" className={scss.startLosingBtn}>
          Start losing weight
        </NavLink>
      </div>
    </div>,
    modalWindow
  );
}
