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

export interface SignUpOrIn {
  email: string;
  password: string;
}

export interface LogInResponse {
  accessToken: string;
  refreshToken: string;
  isFirstLogin: boolean;
  user: User;
}
