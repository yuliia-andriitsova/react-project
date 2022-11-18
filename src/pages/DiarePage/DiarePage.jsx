import Header from 'components/Header/Header';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';

export default function DairyPage() {
  return (
    <>
      <Header />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <RightSideBar />
    </>
  );
}
