import DairyAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import Header from 'components/Header/Header';
// import { DailyProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React from 'react';

export default function DairyPage() {
  return (
    <>
      <Header />
      <DairyAddProductForm />
      {/* <DailyProductsList /> */}
    </>
  );
}
