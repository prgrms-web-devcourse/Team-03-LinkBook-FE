import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  height: 450px;
  margin: 30px auto;
`;

export const Title = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding: 20px 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  font-family: 'Noto Sans KR', sans-serif;
`;

export const MainText = styled.span`
  color: ${({ theme }) => theme.colors.main[0]};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoggedButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  width: fit-content;
  padding-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LoggedText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.b[2]};
  font-family: 'Noto Sans KR', sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const SignUpContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const SignUpText = styled.p`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.b[2]};
  font-family: 'Noto Sans KR', sans-serif;
`;
