import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import scss from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  return (
    <section className={scss.container}>
      <RegistrationForm />
    </section>
  );
}
