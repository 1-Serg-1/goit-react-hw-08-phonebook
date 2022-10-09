import { Box } from 'components/Box';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Box as="nav" display="flex" justifyContent="center" gridGap="30px">
        <NavItem to="/register">Sign Up</NavItem>
        <NavItem to="/login">Log In</NavItem>
      </Box>
    </>
  );
};
