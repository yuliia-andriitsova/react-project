import LoginBtn from 'components/Buttons/LoginBtn';
import RegisterBtn from 'components/Buttons/RegisterBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRegistartionUser } from 'services/API';
import css from './Registration.module.css';
import {loginUserOperation} from '../../redux/Auth/auth-operations';
import { toast } from 'react-toastify';

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
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }

  return (
    <div>
      <h2 className={css.registrTitle}>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Name &#8432;
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            className={css.input}
            required
          />
        </label>
        <label className={css.label}>
          Email &#8432;
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={css.input}
            required
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
            required
          />
        </label>
        <LoginBtn />
      <RegisterBtn />
      </form>
      
    </div>
  );
};

export default RegistrationForm;
