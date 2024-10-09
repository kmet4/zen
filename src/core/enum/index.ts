export const NEWS_API_KEY = 'e0558895f82446a6ac86aaddedd355ed'

export const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='

export enum LoadingStage {
  LOAD = 'LOAD',
  LOADING = 'LOADING',
}

export enum Api {
  POSTS = 'posts',
  USERS = 'users',
  NEWS = `${NEWS_API_URL}${NEWS_API_KEY}`,
}

export enum Routes {
  HOME = '/Home',
  PROFILE = '/Profile',
  LOGIN = '/Login',
  REGISTRATION = '/Registration',
}
