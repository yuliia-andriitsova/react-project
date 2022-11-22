import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import scss from './DairyPage.module.scss';
import { useEffect, useState } from 'react';
import { Subheader } from 'components/Subheader/Subheader';
import { useNavigate } from 'react-router-dom';
import { fetchDailyRatePrivate } from 'redux/Daily-rate/daily-rate-operations';
import { useDispatch } from 'react-redux';

export default function DairyPage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      dispatch(fetchDailyRatePrivate(userData));
      localStorage.removeItem('userData');
    }
  }, [dispatch]);

  const handleBack = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      navigate('/calculator');
    }
  };
  return (
    <div className={scss.dairyPage}>
      <section className={scss.containerPrivate}>
        <Subheader onBack={handleBack} />
        <DiaryAddProductForm setIsOpen={setIsOpen} isOpen={isOpen} />
        <DiaryProductsList />
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className={scss.addButton}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.72 12.96H12.96V18.72H11.04V12.96H5.28003V11.04H11.04V5.28003H12.96V11.04H18.72V12.96Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
      <section>
        <RightSideBar />
      </section>
    </div>
  );
}
