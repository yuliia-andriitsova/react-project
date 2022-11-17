import RegisterBtn from 'components/Buttons/RegisterBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRegistartionUser } from 'services/API';
import css from './Registration.module.css';
import { loginUserOperation } from '../../redux/Auth/auth-operations';
// import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await postRegistartionUser({ username: name, email, password });
      dispatch(loginUserOperation({ email, password }));
      setName('');
      setPassword('');
      setEmail('');
    } catch (error) {
      if (error.response.status === 409) {
        alert('Provided email already exists. Please, try another email.');
      }
    }
  }

  return (
    <div className={css.registerWrap}>
      <h2 className={css.registrTitle}>REGISTER</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.input}>
          <label className={css.label}>Name *</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            className={css.inputField}
            required
          />
        </div>
        <div className={css.input}>
          <label className={css.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={css.inputField}
            required
          />
        </div>

        <div className={css.input}>
          <label className={css.label}>Password *</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className={css.inputField}
            required
          />
        </div>
        <div className={css.btnWrap}>
          <NavLink to="/signin" className={css.loginBtn}>
            Login
          </NavLink>
          <RegisterBtn />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
