import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDailyRate } from 'redux/Daily-rate/daily-rate-operations';
import css from './DailyCaloriesForm.module.css';

export default function DailyCaloriesForm() {
  const [modalState, setModalState] = useState(false);

  // const [weight, setWeight] = useState(21);
  // const [height, setHeight] = useState(100);
  // const [age, setAge] = useState(18);
  // const [desiredWeight, setDesireWeight] = useState(20);
  // const [bloodType, setBloodType] = useState(1);

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [desiredWeight, setDesireWeight] = useState('');
  const [bloodType, setBloodType] = useState('');

  const dispatch = useDispatch();

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
    // const { weight, height, age, desiredWeight, bloodType } = event.target.name;
    dispatch(fetchDailyRate({ weight, height, age, desiredWeight, bloodType }));
    setModalState(true);
  };

  return (
    <div className={css.DailyCaloriesForm}>
      <h2 className={css.title}>
        Calculate your daily calorie <br /> intake right now
      </h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.element}>
          <label htmlFor="height" className={css.label}>
            Height *
          </label>
          <input
            type="text"
            id="height"
            name="height"
            value={height}
            className={css.input}
            onChange={handleChangeInput}
          />
        </div>

        <div className={css.element}>
          <label htmlFor="desiredWeight" className={css.label}>
            Desired weight *
          </label>
          <input
            type="text"
            id="desiredWeight"
            name="desiredWeight"
            value={desiredWeight}
            className={css.input}
            onChange={handleChangeInput}
          />
        </div>

        <div className={css.element}>
          <label htmlFor="age" className={css.label}>
            Age *
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className={css.input}
            value={age}
            onChange={handleChangeInput}
          />
        </div>

        <div className={css.radioGroup}>
          <p className={css.label}>Blood type *</p>
          <div>
            <input
              type="radio"
              id="bloodType1"
              name="bloodType"
              value="1"
              className={css.inputRadio}
              onChange={handleChangeInput}
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
            />
            <label htmlFor="bloodType3" className={css.radio}>
              3
            </label>
            <input
              type="radio"
              id="bloodType4"
              name="bloodType"
              value="4"
              onChange={handleChangeInput}
            />
            <label htmlFor="bloodType4" className={css.radio}>
              4
            </label>
          </div>
        </div>

        <div className={css.element}>
          <label htmlFor="weight" className={css.label}>
            Current weight *
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            className={css.input}
            value={weight}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit">Start losing weight</button>
      </form>

      {modalState && <Modal onClose={() => setModalState(false)} />}
    </div>
  );
}
