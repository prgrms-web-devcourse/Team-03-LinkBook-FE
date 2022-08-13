export const validateName = (len: number) => {
  return len <= 8 && len > 0;
};

export const validateIntroduce = (len: number) => {
  return len <= 50 && len > 0;
};

export const validateImage = (len: number) => {
  return len > 0;
};
