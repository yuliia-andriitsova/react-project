import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ruRU from 'date-fns/locale/ru';
import { ReactComponent as CalendarIcon } from './calendar.svg';
import css from './DiaryDateCalendar.module.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale('ru-RU', ruRU);
  const CustomInput = forwardRef(({ onClick }, ref) => (
    <>
      <span className={css.date} onClick={onClick} ref={ref}>
        {startDate.toLocaleDateString('ru-RU')}
      </span>
      <span>
        <CalendarIcon
          alt="choose date"
          width="20px"
          height="20px"
          className={css.icon}
          onClick={onClick}
        />
      </span>
    </>
  ));

  return (
    <div className={css.wrapper}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomInput />}
        maxDate={new Date()}
      />
    </div>
  );
};

export default Calendar;
