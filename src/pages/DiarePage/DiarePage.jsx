import DairyAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DailyProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React from 'react';

export default function DairyPage() {
  return (
    <>
      <DairyAddProductForm />
      <DailyProductsList />
    </>
  );
}
