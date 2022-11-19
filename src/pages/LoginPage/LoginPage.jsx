import LoginForm from 'components/LoginForm/LoginForm';
import Logo from 'components/Logo/Logo';
import scss from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={scss.container}>
      <Logo />
      <LoginForm />
    </div>
  );
}
