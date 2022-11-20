import Logo from 'components/Logo/Logo';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import scss from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  return (
    <div className={scss.container}>
      <Logo />
      <RegistrationForm />
    </div>
  );
}
