import LoginBtn from 'components/Buttons/LoginBtn';
import RegisterBtn from 'components/Buttons/RegisterBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserOperation } from 'redux/Auth/auth-operations';
import css from './LoginForm.module.css';

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
    <div>
      <h2 className={css.loginTitle}>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Email &#8432;
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Password &#8432;
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className={css.input}
          />
        </label>
        <LoginBtn />
      <RegisterBtn />
      </form>
    </div>
  );
};
export default LoginForm;
