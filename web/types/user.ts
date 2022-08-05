export interface LogIn {
  access_token: string;
  refresh_token: string;
  email: string;
  name: string;
  image: string;
  interest: string[];
}

export interface MyInfo {
  id: number;
  email: string;
  name: string;
  image: string;
  introduce: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
  interest: string[];
}
