import React, { useState } from 'react';
import css from './DailyCaloriesForm.module.css';
import PropTypes from 'prop-types';

export default function DailyCaloriesForm({ onSubmit }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [desiredWeight, setDesireWeight] = useState('');
  const [bloodType, setBloodType] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'weight':
        setWeight(Number(value));
        break;
      case 'height':
        setHeight(Number(value));
        break;
      case 'age':
        setAge(Number(value));
        break;
      case 'desiredWeight':
        setDesireWeight(Number(value));
        break;
      case 'bloodType':
        setBloodType(Number(value));
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ weight, height, age, desiredWeight, bloodType });
  };

  return (
    <div className={css.DailyCaloriesForm}>
      <h2 className={css.title}>
        Calculate your daily calorie <br /> intake right now
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={css.form}>
          <div className={css.firstColumn}>
            <div className={css.element}>
              <label htmlFor="height" className={css.label}>
                Height *
              </label>
              <input
                type="number"
                min={100}
                max={250}
                id="height"
                name="height"
                value={height}
                className={css.input}
                onChange={handleChangeInput}
                required="required"
                // placeholder="Number from 100 to 250"
              />
            </div>

            <div className={css.element}>
              <label htmlFor="age" className={css.label}>
                Age *
              </label>
              <input
                type="number"
                min={18}
                max={100}
                id="age"
                name="age"
                className={css.input}
                value={age}
                onChange={handleChangeInput}
                required="required"
                // placeholder="Number from 18 to 100"
              />
            </div>

            <div className={css.element}>
              <label htmlFor="weight" className={css.label}>
                Current weight *
              </label>
              <input
                type="number"
                min={20}
                max={500}
                id="weight"
                name="weight"
                className={css.input}
                value={weight}
                onChange={handleChangeInput}
                required="required"
                // placeholder="Number from 20 to 500"
              />
            </div>
          </div>

          <div className={css.secondColumn}>
            <div className={css.element}>
              <label htmlFor="desiredWeight" className={css.label}>
                Desired weight *
              </label>
              <input
                type="number"
                min={20}
                max={500}
                id="desiredWeight"
                name="desiredWeight"
                value={desiredWeight}
                className={css.input}
                onChange={handleChangeInput}
                required="required"
                // placeholder="Number from 20 to 500"
              />
            </div>

            <div className={css.radioGroup}>
              <div className={css.element}>
                <p className={css.labelLastChild}>Blood type *</p>
                <div>
                  <input
                    type="radio"
                    id="bloodType1"
                    name="bloodType"
                    value="1"
                    className={css.inputRadio}
                    onChange={handleChangeInput}
                    required="required"
                  />
                  <label htmlFor="bloodType1" className={css.radio}>
                    1
                  </label>
                  <input
                    type="radio"
                    id="bloodType2"
                    name="bloodType"
                    value="2"
                    onChange={handleChangeInput}
                    className={css.inputRadio}
                  />
                  <label htmlFor="bloodType2" className={css.radio}>
                    2
                  </label>
                  <input
                    type="radio"
                    id="bloodType3"
                    name="bloodType"
                    value="3"
                    onChange={handleChangeInput}
                    className={css.inputRadio}
                  />
                  <label htmlFor="bloodType3" className={css.radio}>
                    3
                  </label>
                  <input
                    type="radio"
                    id="bloodType4"
                    name="bloodType"
                    value="4"
                    className={css.inputRadio}
                    onChange={handleChangeInput}
                  />
                  <label htmlFor="bloodType4" className={css.radio}>
                    4
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={css.startLosingBtn}>
          Start losing weight
        </button>
      </form>
    </div>
  );
}

DailyCaloriesForm.propTyres = {
  onSubmit: PropTypes.func.isRequired,
};
