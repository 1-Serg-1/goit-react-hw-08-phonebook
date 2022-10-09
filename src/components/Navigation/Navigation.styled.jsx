import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: 5px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  cursor: pointer;
  color: ${p => p.theme.colors.black};
  border: 2px solid black;
  border-radius: 10px;
  &.active {
    color: red;
    border-color: red;
    cursor: default;
  }
  :hover:not(.active),
  :focus:not(.active) {
    text-decoration: underline;
    background-color: green;
  }
`;
