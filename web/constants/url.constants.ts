export const PAGE_URL = {
  MAIN: '/',
  DETAIL: '/folderdetail',
  LIST: '/folderlist',
  UPDATE: '/folderupdate',
  INFO: '/information',
  USER: '/user',
  ERROR: '/404',
} as const;

export const API_URL = {
  BASE: '/api',
  USER: '/users',
  SIGNUP: '/register',
  LOGIN: '/login',
  GET_USER: '/me',
  REFRESH_TOKEN: '/refresh-token',
  FOLDERS: '/folders',
  BOOKMARKS: '/bookmarks',
  COMMENTS: '/comments',
  LIKES: '/likes',
} as const;
