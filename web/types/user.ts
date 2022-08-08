import { AxiosResponse } from 'axios';
export interface User {
  id: number;
  email: string;
  name: string;
  image: string;
  introduce: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LogIn {
  accessToken: string;
  refreshToken: string;
  isFirstLogin: boolean;
  user: User;
}

export interface MyInfo {
  user: User;
}
