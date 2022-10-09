import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { BtnLogout, Logout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Logout>
      <p>{user.name}</p>
      <BtnLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogout>
    </Logout>
  );
};
