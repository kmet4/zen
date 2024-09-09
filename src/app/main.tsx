import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/core/common/routes'
import 'normalize.css'
import './index.css'
import { Provider } from 'react-redux'
import { rootStore } from '@/core/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={rootStore()}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
