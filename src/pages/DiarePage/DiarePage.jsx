import { DailyProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import React from 'react';

export default function DairyPage() {
  const handleSelect = () => {
    console.log('это выбранный продукт!');
  };
  return (
    <>
      <Header />
      <DailyProductsList onSelect={handleSelect} />
    </>
  );
}
