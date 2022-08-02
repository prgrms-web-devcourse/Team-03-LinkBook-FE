import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 10px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.h[2]};
  border: none;
  outline: none;
  resize: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 100%;
  height: 120px;
  padding: 15px 15px 10px 15px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray[4]}`};
  border-radius: 10px;
`;

export const TextLenContainer = styled.div`
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.colors.gray[3]};
  font-size: ${({ theme }) => theme.fontSize.b[2]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
