import LoginBtn from 'components/Buttons/LoginBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUserOperation } from 'redux/Auth/auth-operations';
import scss from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUserOperation({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={scss.loginWrap}>
      <h2 className={scss.loginTitle}>SIGN IN</h2>
      <form onSubmit={handleSubmit} className={scss.form}>
        <div className={scss.input}>
          <label className={scss.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={scss.inputField}
          />
        </div>
        <div className={scss.input}>
          <label className={scss.label}>Password *</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className={scss.inputField}
          />
        </div>
        <div className={scss.btnWrap}>
          <LoginBtn />
          <NavLink to="/registration" className={scss.registerBtn}>
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
