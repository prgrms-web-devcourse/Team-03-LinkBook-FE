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
  access_token: string;
  refresh_token: string;
  isFirstLogin: boolean;
  user: User;
}

export interface MyInfo {
  user: User;
}

export interface SignUpOrIn {
  email: string;
  password: string;
}

interface InterestsField {
  field: string;
}
export interface UpdateInfo {
  name: string;
  image: string;
  introduce: string;
  interests: InterestsField[] | [];
}
