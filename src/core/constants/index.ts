import { IApiStatusState } from '@/core/models';
import { Routes } from '@/core/enum';

export const initialApiState: IApiStatusState<null> = {
  apiData: null,
  apiStatus: null,
  apiError: null,
};

export const PUBLIC_ROUTES = [
  '/',
  Routes.REGISTRATION,
  Routes.LOGIN,
] as const
