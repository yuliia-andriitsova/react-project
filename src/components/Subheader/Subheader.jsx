import { useDispatch, useSelector } from 'react-redux';
import { logoutUserOperation } from 'redux/Auth/auth-operations';
import scss from './Subheader.module.scss';
export const Subheader = ({ onBack }) => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user?.username);
  return (
    <div className={scss.Subheader}>
      {onBack ? (
        <button className={scss.arrow} type="button" onClick={onBack}>
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      ) : (
        <div />
      )}
      {username && (
        <div className={scss.nameWrap}>
          <p className={scss.userName}>{username}</p>
          <button className={scss.exitBtn} type="button" onClick={() => dispatch(logoutUserOperation())}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
};
