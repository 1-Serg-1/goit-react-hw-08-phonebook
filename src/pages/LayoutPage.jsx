import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from 'components/Layout/Layout';

export const LayoutPage = () => {
  return (
    <>
      <Layout />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
