import { useDispatch } from 'react-redux';
import { registrUser } from 'redux/Auth/auth-operations';


const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      registrUser({
        username: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required/>
        </label>
        <label>
          Email
          <input type="email" name="email" required/>
        </label>
        <label>
          Password
          <input type="password" name="password" required/>
        </label>
      </form>
    </div>
  );
};

export default RegistrationForm;
