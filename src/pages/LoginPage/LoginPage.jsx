import LoginForm from 'components/LoginForm/LoginForm';
import scss from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <section className={scss.container}>
      <LoginForm />
    </section>
  );
}
