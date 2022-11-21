import { useDispatch, useSelector } from 'react-redux';
import { logoutUserOperation } from 'redux/Auth/auth-operations';
import burgerMenu from '../../assets/images/burger-back/burger-menu.svg';
import s from './Userinfo.module.scss';

function UserInfo() {
  const dispatch = useDispatch();

  const username = useSelector(state => state.user?.username);
  return (
    <div className={s.UserInfo}>
      <p className={s.UserInfoText}>Hello: {username}</p>
      <button
        type="button"
        onClick={() => dispatch(logoutUserOperation())}
        className={s.UserBtn}
      >
        Exit
      </button>
      <button className={s.burgerMenu}>
        <img src={burgerMenu} alt="burgerMenu" />
      </button>
    </div>
  );
}
export default UserInfo;
