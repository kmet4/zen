import { createBrowserRouter } from 'react-router-dom'
import AppRouter from '@/app/AppRouter.tsx'
import { ProfilePage } from '@/modules/Profile/containers/ProfilePage/ProfilePage.tsx'
import { HomePage } from '@/modules/Main/containers/HomePage/HomePage.tsx'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter/>,
    children: [
      {
        path: '/Profile',
        element: <ProfilePage />,
      },
      {
        path: '/Home',
        element: <HomePage />,
      }
    ],
    errorElement: null,
  }
]);