import { LoadingStage } from '@/core/enum'

export interface IApiError {
  status?: number | null
  message: string
}

export interface IApiStatusState<T> {
  apiData: T | null
  apiStatus: LoadingStage | null
  apiError: IApiError | null
}
