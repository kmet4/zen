import { configureStore } from '@reduxjs/toolkit'
import homePageSlice from '@/modules/Home/slices/index.ts'

export const rootStore = () =>
  configureStore({
    reducer: {
      home: homePageSlice,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof rootStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']