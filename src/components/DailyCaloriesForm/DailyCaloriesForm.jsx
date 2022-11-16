import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import css from './DailyCaloriesForm.module.css';

export default function DailyCaloriesForm() {
  const [modalState, setModalState] = useState(false);
  return (
    <div className={css.DailyCaloriesForm}>
      <h2 className={css.title}>
        Calculate your daily calorie <br /> intake right now
      </h2>
      <form className={css.form}>
        <div className={css.element}>
          <label htmlFor="height" className={css.label}>
            Height *
          </label>
          <input type="text" id="height" name="height" className={css.input} />
        </div>

        <div className={css.element}>
          <label htmlFor="desiredweight" className={css.label}>
            Desired weight *
          </label>
          <input
            type="text"
            id="desiredweight"
            name="desiredweight"
            className={css.input}
          />
        </div>

        <div className={css.element}>
          <label htmlFor="age" className={css.label}>
            {' '}
            Age *
          </label>
          <input type="text" id="age" name="age" className={css.input} />
        </div>

        <div className={css.radioGroup}>
          <p className={css.label}>Blood type *</p>
          <div>
            <input
              type="radio"
              id="bloodGroupChoice1"
              name="blood"
              value="1"
              className={css.inputRadio}
            />
            <label htmlFor="bloodGroupChoice1" className={css.radio}>
              1
            </label>
            <input type="radio" id="bloodGroupChoice2" name="blood" value="2" />
            <label htmlFor="bloodGroupChoice2" className={css.radio}>
              2
            </label>
            <input type="radio" id="bloodGroupChoice3" name="blood" value="3" />
            <label htmlFor="bloodGroupChoice3" className={css.radio}>
              3
            </label>
            <input type="radio" id="bloodGroupChoice4" name="blood" value="4" />
            <label htmlFor="bloodGroupChoice4" className={css.radio}>
              4
            </label>
          </div>
        </div>

        <div className={css.element}>
          <label htmlFor="currentweight" className={css.label}>
            Current weight *
          </label>
          <input
            type="text"
            id="currentweight"
            name="currentweight"
            className={css.input}
          />
        </div>
      </form>
      <button type="submit" onClick={() => setModalState(true)}>
        Start losing weight
      </button>
      {modalState && <Modal onClose={() => setModalState(false)} />}
    </div>
  );
}
