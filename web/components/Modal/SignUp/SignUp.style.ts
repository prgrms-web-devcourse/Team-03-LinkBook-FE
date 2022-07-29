import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  height: 420px;
  margin: 30px auto;
`;

export const Title = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding-top: 20px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[0]};
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.3;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Description = styled.p`
  width: fit-content;
  margin: 20px auto 0 auto;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

export const MainText = styled.span`
  color: ${({ theme }) => theme.colors.main[0]};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  width: fit-content;
  margin: 20px auto 0 auto;
`;

export const PreviousButton = styled.div`
  position: absolute;
  top: 55px;
  left: 20px;
  cursor: pointer;
`;
