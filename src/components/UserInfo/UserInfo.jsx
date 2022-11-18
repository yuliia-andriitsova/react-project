import { useDispatch, useSelector } from 'react-redux';
import { logoutUserOperation } from 'redux/Auth/auth-operations';

function UserInfo() {
  const dispatch = useDispatch();

  const username = useSelector(state => state.user?.username);
  return (
    <div>
      <p>hello {username}</p>
      <button type="button" onClick={() => dispatch(logoutUserOperation())}>
        Exit
      </button>
    </div>
  );
}
export default UserInfo;
