import React from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalWindow = document.querySelector('#modal-root');

export default function Modal() {
  return createPortal(
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <button type="button" className={css.ModalCloseIcon}>
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
        <h2 className={css.ModalTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p>
          <span className={css.ModalNumberCalories}>XXXX</span>
          <span className={css.ModalCalories}> kcal</span>
        </p>
        <h3>Foods you should not eat</h3>
        <span className={css.ModalLine}></span>
        <ol className={css.ModalListNotEat}></ol>
      </div>
    </div>,
    modalWindow
  );
}
