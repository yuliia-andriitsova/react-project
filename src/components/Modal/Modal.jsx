import React from 'react';
import css from './Modal.module.css';

export default function Modal() {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <h2 className={css.ModalTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p>
          <span className={css.ModalNumberCalories}>XXXX</span>
          <span className={css.ModalCalories}> kcal</span>
        </p>
        <h3>Foods you should not eat</h3>
        <ol className={css.ModalListNotEat}></ol>
      </div>
    </div>
  );
}
