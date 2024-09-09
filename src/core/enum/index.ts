import { NEWS_API_KEY, NEWS_API_URL } from '@/core/constants'

export enum LoadingStage {
  LOAD = 'LOAD',
  LOADING = 'LOADING',
}

export enum Api {
  NEWS = `${NEWS_API_URL}${NEWS_API_KEY}`
}