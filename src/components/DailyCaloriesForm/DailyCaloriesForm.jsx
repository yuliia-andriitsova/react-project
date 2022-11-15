import React from 'react';
import styles from './DailyCaloriesForm.module.css';

export default function DailyCaloriesForm() {
  return (
    <div className={styles.DailyCaloriesForm}>
      <h2 className={styles.title}>
        Calculate your daily calorie <br /> intake right now
      </h2>
      <form className={styles.form}>
        <div className={styles.element}>
          <label htmlFor="height" className={styles.label}>
            Height *
          </label>
          <input
            type="text"
            id="height"
            name="height"
            className={styles.input}
          />
        </div>

        <div className={styles.element}>
          <label htmlFor="desiredweight" className={styles.label}>
            Desired weight *
          </label>
          <input
            type="text"
            id="desiredweight"
            name="desiredweight"
            className={styles.input}
          />
        </div>

        <div className={styles.element}>
          <label htmlFor="age" className={styles.label}>
            {' '}
            Age *
          </label>
          <input type="text" id="age" name="age" className={styles.input} />
        </div>

        <div className={styles.radioGroup}>
          <p className={styles.label}>Blood type *</p>
          <div>
            <input
              type="radio"
              id="bloodGroupChoice1"
              name="blood"
              value="1"
              className={styles.inputRadio}
            />
            <label htmlFor="bloodGroupChoice1" className={styles.radio}>
              1
            </label>
            <input type="radio" id="bloodGroupChoice2" name="blood" value="2" />
            <label htmlFor="bloodGroupChoice2" className={styles.radio}>
              2
            </label>
            <input type="radio" id="bloodGroupChoice3" name="blood" value="3" />
            <label htmlFor="bloodGroupChoice3" className={styles.radio}>
              3
            </label>
            <input type="radio" id="bloodGroupChoice4" name="blood" value="4" />
            <label htmlFor="bloodGroupChoice4" className={styles.radio}>
              4
            </label>
          </div>
        </div>

        <div className={styles.element}>
          <label htmlFor="currentweight" className={styles.label}>
            Current weight *
          </label>
          <input
            type="text"
            id="currentweight"
            name="currentweight"
            className={styles.input}
          />
        </div>
      </form>
      <button type="submit">Start losing weight</button>
    </div>
  );
}
