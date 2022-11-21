import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import scss from './DairyPage.module.scss';

export default function DairyPage() {
  return (
    <div className={scss.dairyPage}>
      <div className={scss.containerPrivate}>
        <DiaryAddProductForm />
        <DiaryProductsList />
      </div>
      <RightSideBar />
    </div>
  );
}
