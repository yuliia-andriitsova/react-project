import css from './Buttons.module.css';

const LoginBtn = () => {
    return (
        <button type='submit' className={css.loginBtn}>
            Login
        </button>
    )
};
export default LoginBtn;