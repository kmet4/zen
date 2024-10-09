import { FC, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Layout } from '@/core/comonents/Layout/Layout.tsx';
import { PUBLIC_ROUTES } from '@/core/constants';
import { Routes } from '@/core/enum';

const AppRouter: FC = () => {
  /*  const dispatch = useAppDispatch();*/

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userId = Cookies.get('user');

  const isPublicRouter = PUBLIC_ROUTES.includes(
    pathname as (typeof PUBLIC_ROUTES)[number],
  );

  useEffect(() => {
    if (!userId) {
      navigate(Routes.LOGIN)
    }

    if (userId && isPublicRouter) {
      navigate(Routes.HOME)
    }
  }, [isPublicRouter, navigate, userId]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AppRouter;
