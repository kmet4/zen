import { createBrowserRouter } from 'react-router-dom';

import AppRouter from '@/app/AppRouter.tsx';
import { ProfilePage } from '@/modules/Profile/containers/ProfilePage/ProfilePage.tsx';
import { HomePage } from '@/modules/Home/containers/HomePage/HomePage.tsx';
import { AuthLogin } from '@/modules/Auth/containers/AuthLogin';
import { AuthRegistration } from '@/modules/Auth/containers/AuthRegistration/inex.ts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />,
    children: [
      {
        path: '/Home',
        element: <HomePage />,
      },
      {
        path: '/Profile',
        element: <ProfilePage />,
      },
      {
        path: '/Login',
        element: <AuthLogin />,
      },
      {
        path: '/Registration',
        element: <AuthRegistration />,
      },
    ],
    errorElement: null,
  },
]);
