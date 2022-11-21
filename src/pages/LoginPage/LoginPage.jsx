import LoginForm from 'components/LoginForm/LoginForm';
import scss from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={scss.container}>
      <LoginForm />
    </div>
  );
}
