import { createSlice } from '@reduxjs/toolkit'
import { IApiStatusState } from '@/core/models'
import { INews, IPost } from '@/modules/Home/models'
import { initialApiState } from '@/core/constants'
import { getNews, getPosts } from '@/modules/Home/service'
import { LoadingStage } from '@/core/enum'

interface IInitialState {
  news: IApiStatusState<INews[]>
  posts: IApiStatusState<IPost[]>
}

const initialState: IInitialState = {
  news: {
    ...initialApiState,
    apiData: [],
  },
  posts: {
    ...initialApiState,
    apiData: [],
  },
}

const homePageSlice = createSlice({
  name: 'homePageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.news.apiStatus = LoadingStage.LOADING
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.news.apiStatus = LoadingStage.LOAD
        state.news.apiData = payload.articles
      })
      .addCase(getNews.rejected, (state, { payload }) => {
        state.news.apiError = payload || null
      })
      .addCase(getPosts.pending, (state) => {
        state.posts.apiStatus = LoadingStage.LOADING
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts.apiStatus = LoadingStage.LOAD
        state.posts.apiData = payload
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.posts.apiError = payload || null
      })
  },
})

export default homePageSlice.reducer
