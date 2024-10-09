import { createSlice } from '@reduxjs/toolkit';

import { IApiStatusState } from '@/core/models';
import { IUser } from '@/modules/Auth/models';
import { initialApiState } from '@/core/constants';
import { getUsers } from '@/modules/Auth/service';
import { LoadingStage } from '@/core/enum';

interface InitialState {
  users: IApiStatusState<IUser[]>;
  user: IApiStatusState<IUser>;
  currentUser: IApiStatusState<IUser>;
}

const initialState: InitialState = {
  users: {
    ...initialApiState,
    apiData: [],
  },
  user: {
    ...initialApiState,
    apiData: null,
  },
  currentUser: {
    ...initialApiState,
    apiData: null,
  },
};

const authPageSlice = createSlice({
  name: 'authPageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.users.apiStatus = LoadingStage.LOADING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users.apiStatus = LoadingStage.LOAD;
        state.users.apiData = payload;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.users.apiError = payload || null;
      });
  },
});

export default authPageSlice.reducer;
