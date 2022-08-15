import { EMAIL_REGEX, PASSWORD_REGEX } from './regex.constants';

export const LoginValidation = {
  email: {
    value: EMAIL_REGEX,
    message: '이메일 형식에 맞지 않습니다.',
  },
} as const;

export const RegisterValidation = {
  email: LoginValidation.email,
  password: {
    value: PASSWORD_REGEX,
    message: '8-20자, 영문자와 숫자의 조합으로 입력해주세요.',
  },
} as const;
