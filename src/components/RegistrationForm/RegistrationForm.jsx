import RegisterBtn from 'components/Buttons/RegisterBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRegistartionUser } from 'services/API';
import scss from './Registration.module.scss';
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
    <div className={scss.registerWrap}>
      <h2 className={scss.registrTitle}>REGISTER</h2>
      <form onSubmit={handleSubmit} className={scss.form}>
        <div className={scss.input}>
          <label className={scss.label}>Name *</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            className={scss.inputField}
            required
          />
        </div>
        <div className={scss.input}>
          <label className={scss.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={scss.inputField}
            required
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
            required
          />
        </div>
        <div className={scss.btnWrap}>
          <NavLink to="/signin" className={scss.loginBtn}>
            Login
          </NavLink>
          <RegisterBtn />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
