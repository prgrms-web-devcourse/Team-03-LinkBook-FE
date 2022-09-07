import { atom } from 'recoil';

export const showModalStatus = atom({
  key: 'showModalStatus',
  default: {
    Login: false,
    SignUp: false,
    FirstLogin: false,
    User: false,
    Scrap: false,
  },
});
