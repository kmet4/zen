import { IApiStatusState } from '@/core/models'

export const NEWS_API_KEY = 'e0558895f82446a6ac86aaddedd355ed';

export const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';

export const initialApiState: IApiStatusState<null> = {
  apiData: null,
  apiStatus: null,
  apiError: null,
};