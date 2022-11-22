import { HeaderMenu } from 'components/HeaderMenu/HeaderMenu';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserOperation } from 'redux/Auth/auth-operations';
import burgerMenu from '../../assets/images/burger-back/burger-menu.svg';
import s from './Userinfo.module.scss';
import exitBurger from '../../assets/images/burger-back/exitBurger.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const username = useSelector(state => state.user?.username);
  return (
    <div className={s.UserInfo}>
      <p className={s.UserInfoText}>{username}</p>
      <button
        type="button"
        onClick={() => dispatch(logoutUserOperation())}
        className={s.UserBtn}
      >
        Exit
      </button>
      <button className={s.burgerMenu} onClick={() => setIsOpen(prev => !prev)}>
        <img src={isOpen ? exitBurger : burgerMenu} alt="burgerMenu" />
      </button>
      {isOpen && <HeaderMenu />}
    </div>
  );
}
export default UserInfo;
