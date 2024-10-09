import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateUser, IUser } from '@/modules/Auth/models';
import { IApiError } from '@/core/models';
import axios from 'axios';
import { Api } from '@/core/enum';

export const getUsers = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: IApiError }
>('authPageSlice/getUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<IUser[]>(
      `https://66cfffa8181d059277dcdce1.mockapi.io/${Api.USERS}`,
    );

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({
        message: error.message || 'Unknown error',
        status: 500,
      });
    }
    return rejectWithValue({
      message: 'An unexpected error occurred',
      status: 500,
    });
  }
});

export const createUser = createAsyncThunk<
  IUser,
  { userData: ICreateUser },
  { rejectValue: IApiError }
>('authPageSlice/createUser', async ({ userData }, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<IUser>(`https://66cfffa8181d059277dcdce1.mockapi.io/${Api.USERS}`, userData)

    return data
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({
        message: error.message || 'Unknown error',
        status: 500,
      });
    }
    return rejectWithValue({
      message: 'An unexpected error occurred',
      status: 500,
    });
  }
})
