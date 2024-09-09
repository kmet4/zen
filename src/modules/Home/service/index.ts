import { createAsyncThunk } from '@reduxjs/toolkit'
import { INews, IPost } from '@/modules/Home/models'
import axios from 'axios'
import { Api } from '@/core/enum'
import { IApiError } from '@/core/models'

export const getNews = createAsyncThunk<
  { articles: INews[] },
  void,
  { rejectValue: IApiError }
>('homePageSlice/getNews', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<{ articles: INews[] }>(Api.NEWS)

    return data
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({
        message: error.message || 'Unknown error',
        status: 500,
      })
    }
    return rejectWithValue({
      message: 'An unexpected error occurred',
      status: 500,
    })
  }
})

export const getPosts = createAsyncThunk<
  IPost[],
  void,
  { rejectValue: IApiError }
>('homePageSlice/getPosts', async (_, { rejectWithValue }) => {
  try {
    const {data} = await axios.get<IPost[]>(`https://66cfffa8181d059277dcdce1.mockapi.io/posts`);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({
        message: error.message || 'Unknown error',
        status: 500,
      })
    }
    return rejectWithValue({
      message: 'An unexpected error occurred',
      status: 500,
    })
  }
})
