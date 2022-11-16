import { useDispatch, useSelector } from 'react-redux';
import { logoutUserOperation } from 'redux/Auth/auth-operations';

function UserInfo() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user.username);
  return (
    <>
      <ul>
        <li>
          <p>{user}</p>
          <button type="button" onClick={() => dispatch(logoutUserOperation())}>
            Exit
          </button>
        </li>
      </ul>
    </>
  );
}
export default UserInfo;
