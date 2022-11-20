import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ruRU from 'date-fns/locale/ru';
import { ReactComponent as CalendarIcon } from './calendar.svg';
import scss from './DiaryDateCalendar.module.scss';
import PropTypes from 'prop-types';
registerLocale('ru-RU', ruRU);

const Calendar = ({ startDate, setStartDate }) => {
  const CustomInput = forwardRef(({ onClick }, ref) => (
    <>
      <span className={scss.date} onClick={onClick} ref={ref}>
        {startDate.toLocaleDateString('ru-RU')}
      </span>
      <span>
        <CalendarIcon
          alt="choose date"
          width="20px"
          height="20px"
          className={scss.icon}
          onClick={onClick}
        />
      </span>
    </>
  ));

  return (
    <div className={scss.wrapper}>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        customInput={<CustomInput />}
        maxDate={new Date()}
      />
    </div>
  );
};

Calendar.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
};

export default Calendar;
