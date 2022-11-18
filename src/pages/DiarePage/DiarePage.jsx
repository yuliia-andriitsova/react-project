import Header from 'components/Header/Header';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDaySummary } from 'redux/Day/day-operations';

export default function DairyPage() {
  return (
    <>
      <Header />
      <DiaryAddProductForm />
    </>
  );
}
