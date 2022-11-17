import DairyAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
// import { DailyProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import Calendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import React from 'react';

export default function DairyPage() {
  return (
    <>
      <Calendar/>
      <DairyAddProductForm />
      {/* <DailyProductsList /> */}
    </>
  );
}
