import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import dailyRate from 'services/API';
import css from './Modal.module.css';
const modalWindow = document.querySelector('#modal-root');

export default function Modal() {
  const [weight, setWeight] = useState(21);
  const [height, setHeight] = useState(100);
  const [age, setAge] = useState(18);
  const [desiredWeight, setDesireWeight] = useState(20);
  const [bloodType, setBloodType] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyRate({ weight, height, age, desiredWeight, bloodType }));
  }, [dispatch, weight, height, age, desiredWeight, bloodType]);

  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const toggleModal = modalState => {
    if (modalState) {
      setModalState(!modalState);
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };

  const handleCloseModal = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleKeyDown}>
      <div className={css.Modal}>
        <button
          type="button"
          className={css.ModalCloseIcon}
          onClick={handleCloseModal}
        >
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
        <p className={css.ModalLine}>
          <span className={css.ModalNumberCalories}>{dailyRate}</span>
          <span className={css.ModalCalories}> kcal</span>
        </p>
        <span></span>
        <h3 className={css.ModalTitleSecond}>Foods you should not eat</h3>
        {/* <ol className={css.ModalListNotEat}>
          {notAllowedproducts.map(product => (
            <li>{notAllowedProducts}</li>
          ))}
        </ol> */}
        <button type="button">Start losing weight</button>
      </div>
    </div>,
    modalWindow
  );
}
