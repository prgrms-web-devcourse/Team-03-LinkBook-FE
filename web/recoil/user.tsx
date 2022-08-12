import { atom } from 'recoil';
import { User } from '../types';

interface IUserInfo {
  user?: User;
}

export const userInfo = atom<IUserInfo>({
  key: 'userInfo',
  default: {},
});
