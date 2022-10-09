import { GlobalStyle } from './GlobalStyle';
import React from 'react';
import { Box } from './Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Phonebook } from './Phonebook/Phonebook';
import { FormLogin } from './FormLogin/FormLogin';
import { LayoutPage } from 'pages/LayoutPage';
import { Register } from 'pages/Register';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivatedRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, user } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    `Fetching ${user.name} data ...`
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap="40px"
    >
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute component={LayoutPage} redirectTo="/contacts" />
          }
        >
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={FormLogin} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={<PrivatedRoute component={Phonebook} redirectTo="/" />}
        />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </Box>
  );
};
