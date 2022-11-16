import { useDispatch } from "react-redux";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTurget;
        dispatch(
            // logIn({
            //     email: form.elements.email.value,
            //     password: form.elements.password.value,
            // })
        );
    };
    return (
        <div>
            <h2>SIGN IN</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type='email' name='email' />
                </label>
                <lable>
                    Password
                    <input type='password' name='password' />
                </lable>
            </form>
        </div>
    )
};
export default LoginForm;