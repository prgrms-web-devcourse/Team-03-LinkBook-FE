interface IsValidate {
  status: boolean;
  error: string;
}

export const validateName = (len: number): IsValidate => {
  return len <= 8 && len > 0
    ? { status: true, error: '' }
    : { status: false, error: '1-8자 사이의 길이로 입력해주세요.' };
};

export const validateIntroduce = (len: number) => {
  return len <= 50 && len > 0
    ? { status: true, error: '' }
    : { status: false, error: '1-50자 사이의 길이로 입력해주세요.' };
};

export const validateImage = (len: number) => {
  return len > 0
    ? { status: true, error: '' }
    : { status: false, error: '이미지를 업로드해주세요.' };
};
