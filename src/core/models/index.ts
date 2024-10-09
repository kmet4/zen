import { LoadingStage } from '@/core/enum';
import { FormikErrors, FormikTouched } from 'formik';

export interface IApiError {
  status?: number | null;
  message: string;
}

export interface IApiStatusState<T> {
  apiData: T | null;
  apiStatus: LoadingStage | null;
  apiError: IApiError | null;
}

export interface CheckedInput<T> {
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  inputName: keyof T;
}
