import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import scss from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  return (
    <div className={scss.container}>
      <RegistrationForm />
    </div>
  );
}
