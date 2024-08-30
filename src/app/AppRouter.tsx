import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '@/core/comonents/Layout/Layout.tsx'

const AppRouter: FC = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default AppRouter


