import Header from 'components/Header/Header';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import scss from './DairyPage.module.scss';

export default function DairyPage() {
  return (
    <div className={scss.containerPrivate}>
      <Header />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <RightSideBar />
    </div>
  );
}
